<template>
  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">INVENTARIO DE PRODUCTOS</div>
        </q-card-section>
        <q-card-section>
          <div class="q-pa-md">
            <q-table
              flat
              bordered
              :rows="rows"
              :columns="columns"
              row-key="idEntidad"
              v-model:selected="selected"
            >
              <template v-slot:body-cell-cantidadIngreso="props">
                <q-td key="cantidadIngreso" :props="props">
                  {{ props.row.cantidadIngreso }}
                  <q-popup-edit
                    v-model.number="props.row.cantidadIngreso"
                    v-slot="scope"
                    title="Adicionar Cantidad"
                    buttons
                    persistent
                    label-set="Guardar"
                    label-cancel="Salir"
                    @before-hide="addCantidadIngreso(props.row)"
                  >
                    <q-input
                      type="number"
                      v-model.number="scope.value"
                      dense
                      autofocus
                      counter
                      @keyup.enter="scope.set"
                    />
                  </q-popup-edit>
                </q-td>
              </template>
              <template v-slot:body-cell-alertaStock="props">
                <q-td key="alertaStock" :props="props">
                  {{ props.row.alertaStock }}
                  <q-popup-edit
                    v-model.number="props.row.alertaStock"
                    v-slot="scope"
                    title="Adicionar Cantidad"
                    buttons
                    persistent
                    label-set="Guardar"
                    label-cancel="Salir"
                    @before-hide="addAlertaStock(props.row)"
                  >
                    <q-input
                      type="number"
                      v-model.number="scope.value"
                      dense
                      autofocus
                      counter
                      @keyup.enter="scope.set"
                    />
                  </q-popup-edit>
                </q-td>
              </template>
              <template v-slot:body-cell-costoCompra="props">
                <q-td key="costoCompra" :props="props">
                  {{ props.row.costoCompra }}
                  <q-popup-edit
                    v-model.number="props.row.costoCompra"
                    v-slot="scope"
                    title="Adicionar Cantidad"
                    buttons
                    persistent
                    label-set="Guardar"
                    label-cancel="Salir"
                    @before-hide="addCostoCompra(props.row)"
                  >
                    <q-input
                      type="number"
                      v-model.number="scope.value"
                      dense
                      autofocus
                      counter
                      @keyup.enter="scope.set"
                    />
                  </q-popup-edit>
                </q-td>
              </template>
            </q-table>
          </div>
        </q-card-section>
        <!--q-dialog v-model="showInventarioProductoForm" >
          <div dense class="row">
            <div
              class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 q-pa-sm"
            >
              <q-select
                dense
                transition-show="jump-up"
                transition-hide="jump-up"
                standout="text-white"
                filled
                v-model="sucursalSelectList"
                :options="sucursalList"
                label="SUCURSAL *"
                option-label="nombre"
                option-value="idEntidad"
                map-options
                option-disable="inactive"
                :rules="[(val) => !!val || 'Este campo es requerido ']"
                multiple
              >
                <template v-slot:prepend>
                  <q-icon name="content_paste_go" />
                </template>
                <template
                  v-slot:option="{ itemProps, opt, selected, toggleOption }"
                >
                  <q-item v-bind="itemProps">
                    <q-item-section>
                      <q-item-label v-html="opt.nombre" />
                    </q-item-section>
                    <q-item-section side>
                      <q-toggle
                        :model-value="selected"
                        @update:model-value="toggleOption(opt)"
                      />
                    </q-item-section>
                  </q-item>
                </template>
                <template v-slot:after>
                  <q-btn
                    push
                    color="primary"
                    label="+"
                    @click="openModalSucursal()"
                  />
                </template>
              </q-select>
            </div>

            <div
              class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 q-pa-sm"
            >
              <q-input
                dense
                filled
                v-model="formProductos.cantidadStock"
                label="CANTIDAD DE INGRESO"
                class="full-width"
              >
                <template v-slot:prepend>
                  <q-icon name="location_on" />
                </template>
              </q-input>
            </div>
            <div
              class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 q-pa-sm"
            >
              <q-input
                dense
                filled
                v-model="formProductos.cantidadStock"
                label="ALERTA DE STOCK"
                class="full-width"
              >
                <template v-slot:prepend>
                  <q-icon name="location_on" />
                </template>
              </q-input>
            </div>
            <div
              class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 q-pa-sm"
            >
              <q-input
                dense
                filled
                v-model="formProductos.cantidadStock"
                label="COSTO DE COMPRA"
                class="full-width"
              >
                <template v-slot:prepend>
                  <q-icon name="location_on" />
                </template>
              </q-input>
            </div>
          </div>
        </!--q-dialog -->

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
            label="GUARDAR Inventario"
            icon="task_alt"
            type="submit"
            @click="guardarInventario()"
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
  showModalInventario,
} = storeToRefs(store);
const formProductos = ref(store.getProducto);

const actividadEconomicaSiatList = [];
const productoSiatList = [];
const unidadMediadaSiatList = [];
const $q = useQuasar();

const columns = [
  {
    name: "nombreEntidad",
    align: "center",
    label: "Nombre Entidad",
    field: "nombreEntidad",
  },
  { name: "sucursal", label: "Tipo Entidad", field: "sucursal" },

  {
    name: "cantidadIngreso",
    label: "Cantidad Ingreso",
    field: "cantidadIngreso",
  },
  { name: "alertaStock", label: "Alerta Stock", field: "alertaStock" },
  { name: "costoCompra", label: "Costo Compra", field: "costoCompra" },
  { name: "estado", label: "Estado", field: "estado" },
];

const rows = ref(sucursalList.value);

const selected = ref([]);
const showInventarioProductoForm = false;
export default defineComponent({
  components: {},
  setup() {
    const $q = useQuasar();
    return {
      showInventarioProductoForm: ref(false),
      selected,
      columns,
      rows: ref(sucursalList.value),
      usuarioForm: ref({}),
      sucursalList: ref([]),
      sucursalSelectList: ref([]),
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
    ...mapState(productoStore, [
      "prouctos",
      "showModalForm",
      "prouctosList",
      "showModalInventario",
    ]),
  },
  created() {
    this.initForm();
    this.initPage();
  },
  mounted() {
    this.findActividadEconomica();
    this.findUnidadMedida();
    //this.findAllSucursales();
    this.findInventarioByIdEntidadAndIdProducto();
  },
  methods: {
    async operacion(operacion) {
      switch (operacion) {
        case "ADD":
          this.showInventarioProductoForm = true;
          break;
        case "EDITAR":
          this.confirmUpdate();
          break;
        case "ELIMINAR":
          this.confirmDelete();
          break;
      }
      store.findAllProducto(this.usuarioForm.fidEntidad);
    },
    async initPage() {
      this.usuarioForm = JSON.parse(sessionStorage.getItem("usuario"));
    },
    initForm() {

      this.formProductos = prouctos.value;
      this.rows = sucursalList.value;
    },
    closeModal() {

      this.showInventarioProductoForm = false;
      store.openShowModalInventario(false);
    },
    guardarInventario() {
      this.showInventarioProductoForm = false;

      store.addsucursalList(this.rows);
      store.openShowModalInventario(false);
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

    /*async findAllSucursales() {
      await clienteServices
        .findAllSucursales(this.usuarioForm.fidEntidad)
        .then((res) => {
          this.sucursalList = res.data;
          this.sucursalSelectList.push(res.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    },*/

    async findInventarioByIdEntidadAndIdProducto() {
      console.log(
        this.usuarioForm.fidEntidad +
          " --  " +
          this.formProductos.idProductoServicios
      );
      await productosServices
        .findInventarioByIdEntidadAndIdProducto(
          this.usuarioForm.fidEntidad,
          this.formProductos.idProductoServicios
        )
        .then((res) => {

          if (sucursalList.value.length  == 0) {
            this.rows = res.data;

          }else{
            this.rows=sucursalList.value;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addCantidadIngreso(rowSelect) {
      //console.log(JSON.stringify(rowSelect));
    },
    addAlertaStock(rowSelect) {
      //console.log(JSON.stringify(rowSelect));
    },
    addCostoCompra(rowSelect) {
      //console.log(JSON.stringify(rowSelect));
    },
  },
});
</script>
<style lang="sass" >
.my-swal
  z-index: 10001 !important
.my-card
  width: 100%
.uppercase input
  text-transform: uppercase
.uppercase textarea
  text-transform: uppercase
</style>
