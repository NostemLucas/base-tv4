<template>
  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">HOMOLOGACIÓN DE PRODUCTOS CON SIN</div>
        </q-card-section>
        <q-card-section>
          <div dense class="row">
            <div class="row">
              <div class="col-12 col-md-12 col-sm-12 col-xs-12 q-pa-sm">
                <q-select
                  dense
                  transition-show="jump-up"
                  transition-hide="jump-up"
                  standout="text-white"
                  filled
                  v-model="actividadEconomicaSiat"
                  :options="actividadEconomicaSiatList"
                  label="Actividad Económica"
                  option-label="descripcion"
                  option-value="idFacActividad"
                  @update:model-value="findProductosSiat()"
                >
                  <template v-slot:prepend>
                    <q-icon name="swap_horiz" />
                  </template>
                </q-select>
              </div>
              <div class="col-12 col-md-12 col-sm-12 col-xs-12 q-pa-sm">
                <q-select
                  dense
                  transition-show="jump-up"
                  transition-hide="jump-up"
                  standout="text-white"
                  filled
                  v-model="formProductos.fidImpuestosProductosServicios"
                  :options="productoSiatList"
                  label="Producto SIAT"
                  option-label="descripcionProducto"
                  option-value="idProductoServicio"
                  emit-value
                  map-options
                  option-disable="inactive"
                >
                  <template v-slot:prepend>
                    <q-icon name="square_foot" />
                  </template>
                </q-select>
              </div>
              <div class="col-12 col-md-12 col-sm-12 col-xs-12 q-pa-sm">
                <q-select
                  dense
                  transition-show="jump-up"
                  transition-hide="jump-up"
                  standout="text-white"
                  filled
                  v-model="formProductos.claveImpuestosUnidadMedida"
                  :options="unidadMediadaSiatList"
                  label="Unidad de Medida"
                  option-label="descripcion"
                  option-value="idListaParametricas"
                  emit-value
                  map-options
                  use-input
                  hide-selected
                  fill-input
                >
                  <template v-slot:prepend>
                    <q-icon name="straighten" />
                  </template>
                  <template v-slot:no-option>
                    <q-item>
                      <q-item-section class="straighten">
                        No results
                      </q-item-section>
                    </q-item>
                  </template>
                </q-select>
              </div>
            </div>
          </div>
        </q-card-section>
        <q-separator />
        <q-card-actions align="right">
          <q-btn
            align="around"
            class="btn-fixed-width"
            color="brown-5"
            label="CANCELAR"
            icon="close"
            type="reset"
            @click="closeModal()"
          />
          <q-btn
            align="between"
            class="btn-fixed-width"
            color="green"
            label="GUARDAR"
            icon="task_alt"
            type="submit"
            @click="homologarProducto()"
          />
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script >
import { defineComponent, ref, onMounted } from "vue";
import { storeToRefs, mapState } from "pinia";
import Swal from "sweetalert2";
import * as clienteServices from "../../services/cliente.services";
import * as productosServices from "../../services/productos.services";
import { productoStore } from "../../stores/productos-store";
import { useQuasar, Notify } from "quasar";
const store = productoStore();
const {
  prouctos,
  showModalProductosForm,
  imageneList,
  claveCategoriasList,
  sucursalList,
  operacion,
} = storeToRefs(store);
const formProductos = ref(store.getProducto);

const actividadEconomicaSiatList = [];
const productoSiatList = [];
const unidadMediadaSiatList = [];
const $q = useQuasar();
export default defineComponent({
  components: {},
  setup() {
    const $q = useQuasar();
    return {
      actividadEconomicaSiatList: ref([]),
      productoSiatList: ref([]),
      unidadMediadaSiatList: ref([]),
      formProductos: ref({}),
      mensajePositive() {
        $q.notify({
          position: "bottom-right",
          type: "positive",
          message: "La operación  ha sido procesada con éxito.",
        });
      },
      mensajeNegative() {
        $q.notify({
          type: "negative",
          message:
            "La operación no pudo completarse, inténtelo nuevamente o contáctese con su administrador.",
        });
      },
    };
  },
  computed: {
    ...mapState(productoStore, ["prouctos", "showModalForm", "prouctosList"]),
  },
  created() {
    this.initForm();
  },
  mounted() {
    this.findActividadEconomica();
    this.findUnidadMedida();

  },
  methods: {
    initForm() {


      this.formProductos = prouctos.value;
    },
    closeModal() {
      store.opeModalHomologacion(false);
    },
    async findActividadEconomica() {
      await clienteServices
        .findActividadEconomica("3061ae35-f65b-4a9a-8372-f88e1e5cb805")
        .then((res) => {
          this.actividadEconomicaSiatList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async findProductosSiat() {
      await clienteServices
        .findProductosActividadEconomica(
          "3061ae35-f65b-4a9a-8372-f88e1e5cb805",
          this.actividadEconomicaSiat.codigoCaeb
        )
        .then((res) => {
          this.productoSiatList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async findUnidadMedida() {
      await clienteServices
        .findUnidadMedida(
          "UnidadMedida",
          "3061ae35-f65b-4a9a-8372-f88e1e5cb805"
        )
        .then((res) => {
          this.unidadMediadaSiatList = res.data;
          this.stringOptions = this.unidadMediadaSiatList;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async homologarProducto() {
      await productosServices
        .homologarProducto(this.formProductos)
        .then((res) => {

          store.opeModalHomologacion(false);
          store.findAllProducto("99021b03-45ac-4a12-8d02-3a3b3c52acdb");
          this.mensajePositive();
        })
        .catch((err) => {
          console.log(err);
          this.mensajeNegative();
        });
    },
  },
});
</script>
