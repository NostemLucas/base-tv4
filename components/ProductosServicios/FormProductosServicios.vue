<template>
  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <q-card-section class="bg-grey-3 text-#17202a">
          <div class="text-h7">PRODUCTOS Y/O SERVICIOS</div>
          <!--div class="text-subtitle2">Registro de Cliente o Empresa</div-->
        </q-card-section>
        <q-form @submit="operacionForm()" class="q-gutter-md">
          <q-card-section v-show="!showProges">
            <div dense class="row">
              <div
                class="col-12 col-xs-12 col-sm-12 col-md-8 col-lg-9 col-xl-10 q-pa-sm"
              >
                <div class="q-pa-md example-row-horizontal-alignment">
                  <div dense class="row justify-center">
                    <div class="col-4 col-md-4 col-sm-12 col-xs-12 q-pa-sm">
                      <q-select
                        dense
                        transition-show="jump-up"
                        transition-hide="jump-up"
                        standout="text-white"
                        filled
                        v-model="actividadEconomicaSiat"
                        :options="actividadEconomicaSiatList"
                        label="ACTIVIDAD ECONÓMICA ASOCIADA AL SIN"
                        option-label="descripcion"
                        option-value="idFacActividad"
                        @update:model-value="findProductosSiat()"
                      >
                        <template v-slot:prepend>
                          <q-icon name="swap_horiz" />
                        </template>
                      </q-select>
                    </div>

                    <div class="col-4 col-md-4 col-sm-12 col-xs-12 q-pa-sm">
                      <q-select
                        dense
                        transition-show="jump-up"
                        transition-hide="jump-up"
                        standout="text-white"
                        filled
                        v-model="formProductos.fidImpuestosProductosServicios"
                        :options="productoSiatList"
                        label="CATEGORIA DE PRODUCTO  ASOCIADA AL SIN"
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

                    <div class="col-4 col-md-4 col-sm-12 col-xs-12 q-pa-sm">
                      <q-select
                        dense
                        transition-show="jump-up"
                        transition-hide="jump-up"
                        standout="text-white"
                        filled
                        v-model="formProductos.claveImpuestosUnidadMedida"
                        :options="unidadMediadaSiatList"
                        label="UNIDAD DE MEDIDA ASOCIADA AL SIN"
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
                  <div dense class="row justify-center">
                    <div class="col-3 col-md-3 col-sm-12 col-xs-12 q-pa-sm">
                      <q-select
                        dense
                        transition-show="jump-up"
                        transition-hide="jump-up"
                        standout="text-white"
                        filled
                        v-model="formProductos.claveTipoProducto"
                        :options="tipoProductoList"
                        label="TIPO DE PRODUCTO *"
                        option-label="nombre"
                        option-value="id"
                        emit-value
                        map-options
                        option-disable="inactive"
                        :rules="[(val) => !!val || 'Este campo es requerido ']"
                        @update:model-value="getSecuencialProducto()"
                      >
                        <template v-slot:prepend>
                          <q-icon name="content_paste_go" />
                        </template>
                      </q-select>
                    </div>

                    <!--
                    <div class="col-4 col-md-4 col-sm-12 col-xs-12 q-pa-sm">
                      <q-select
                        dense
                        transition-show="jump-up"
                        transition-hide="jump-up"
                        standout="text-white"
                        filled
                        v-model="claveCategoriasSelectList"
                        :options="categoriaList"
                        label="CATEGORIA DE PRODUCTO *"
                        option-label="nombre"
                        option-value="idCategoria"
                        map-options
                        option-disable="inactive"
                        :rules="[(val) => !!val || 'Este campo es requerido ']"
                        multiple
                      >
                        <template v-slot:prepend>
                          <q-icon name="content_paste_go" />
                        </template>
                        <template
                          v-slot:option="{
                            itemProps,
                            opt,
                            selected,
                            toggleOption,
                          }"
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
                        <template v-slot:after class="q-pa-xs q-gutter-xs">
                          <q-btn
                            push
                            color="primary"
                            label="+"
                            @click="openModalCategoria()"
                          />
                        </template>
                      </q-select>
                    </div>
                    -->

                    <div class="col-3 col-md-3 col-sm-12 col-xs-12 q-pa-sm">
                      <q-input
                        dense
                        filled
                        v-model="formProductos.codigoProducto"
                        label="CÓDIGO DE PRODUCTO*"
                        hint="Código de producto o secuencial  "
                        class="full-width uppercase"
                        :rules="[(val) => !!val || 'Este campo es requerido ']"
                        :readonly="!formProductos.disbleCodigoProducto"
                      >
                        <template v-slot:prepend>
                          <q-icon name="person" />
                        </template>
                        <template v-slot:after>
                          <q-btn
                            size="sm"
                            flat
                            push
                            outline
                            color="green-5"
                            label="+"
                            @click="disbleCodigoProducto()"
                          />
                        </template>
                      </q-input>
                    </div>
                    <div class="col-3 col-md-3 col-sm-12 col-xs-12 q-pa-sm">
                      <q-input
                        dense
                        filled
                        v-model.number="formProductos.precioVenta"
                        label="PRECIO DEL PRODUCTO/SERVICIO"
                        type="number"
                        inputmode="numeric"
                        prefix="Bs"
                        input-class="text-right"
                        mask="####"
                      >
                        <template v-slot:prepend>
                          <q-icon name="contacts" />
                        </template>
                      </q-input>
                    </div>
                    <div class="col-3 col-md-3 col-sm-12 col-xs-12 q-pa-sm">
                      <q-input
                        dense
                        filled
                        type="number"
                        v-model.number="formProductos.descuentoVenta"
                        label="DESCUENTO DEL PRODUCTO/SERVICIO"
                        class="full-width"
                        prefix="Bs"
                        input-class="text-right"
                      >
                        <template v-slot:prepend>
                          <q-icon name="contacts" />
                        </template>
                      </q-input>
                    </div>
                  </div>
                  <div dense class="row justify-center">
                    <div class="col-12 col-md-12 col-sm-12 col-xs-12 q-pa-sm">
                      <q-input
                        dense
                        filled
                        v-model="formProductos.nombreProducto"
                        label="NOMBRE DE PRODUCTO O SERVICIO*"
                        class="full-width uppercase"
                        :rules="[(val) => !!val || 'Este campo es requerido ']"
                      >
                        <template v-slot:prepend>
                          <q-icon name="person" />
                        </template>
                      </q-input>
                    </div>
                  </div>
                  <div dense class="row justify-center">
                    <div class="col-12 col-md-12 col-sm-12 col-xs-12 q-pa-sm">
                      <q-input
                        filled
                        type="textarea"
                        class="uppercase"
                        v-model="formProductos.descripcionProducto"
                        label="DESCRIPCIÓN DE PRODUCTO*"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xl-2 q-pa-sm"
              >
                <div class="q-gutter-sm row items-start">
                  <q-card class="my-card justify-center" dense>
                    <q-card-section
                      class="my-card text-white justify-center"
                      dense
                    >
                      <div class="row justify-center">
                        <q-file
                          v-show="false"
                          ref="file"
                          bg-color="blue-grey-5"
                          v-model="imagen"
                          label="ADICIONE UNA IMAGEN"
                        />
                        <q-btn
                          @click="testclick()"
                          label="ADICIONE UNA IMAGEN"
                          color="blue-grey-9"
                          icon="panorama"
                        ></q-btn>
                      </div>
                    </q-card-section>

                    <q-separator />

                    <div class="row">
                      <div class="col-6" v-for="imagenProd in listImagen">
                        <q-img
                          style="max-width: 250px; height: 150px"
                          img-class="my-custom-image"
                          class="rounded-borders"
                          spinner-color="white"
                          fit="scale-down"
                          :src="imagenProd.imagen"
                        >
                          <div
                            class="absolute-bottom text-subtitle1 text-center"
                          >
                            <q-btn
                              flat
                              round
                              color="red"
                              icon="delete_outline"
                              @click="onRemoved(imagenProd.idImagenProducto)"
                            >
                            </q-btn>
                          </div>
                        </q-img>
                      </div>
                    </div>

                    <q-separator />
                  </q-card>
                </div>
                <div></div>
              </div>
            </div>
          </q-card-section>
          <q-card-section v-show="showProges">
            <div class="row justify-center">
              <div class="text-#17202a text-subtitle1 text-weight-bolder">
                <q-spinner-gears color="#17202a" size="5em" />
                <q-tooltip :offset="[0, 9]">PROCESANDO</q-tooltip>
                PROCESANDO SOLICITUD
              </div>
            </div>
          </q-card-section>
          <q-separator />

          <q-card-actions align="right">
            <q-btn
              class="btn-fixed-width"
              color="blue-grey-9"
              label="CANCELAR"
              icon="close"
              type="reset"
              @click="closeModal()"
              outline
            />
            <!--q-btn
              align="around"
              class="btn-fixed-width"
              color="purple-5"
              label="REGISTRO DE INVENTARIO"
              icon="close"
              type="reset"
              @click="openShowModalInventario()"
            /-->
            <q-btn
              class="btn-fixed-width"
              color="blue-grey-9"
              label="GUARDAR"
              icon="task_alt"
              type="submit"
              @click="confirmSave()"
            />
          </q-card-actions>
        </q-form>
      </q-card>
    </div>

    <q-dialog
      v-model="showModalHomolagProductoForm"
      transition-show="scale"
      transition-hide="scale"
    >
      <HomologarProductos></HomologarProductos>
    </q-dialog>
    <q-dialog
      v-model="showModalCategoriaForm"
      transition-show="scale"
      transition-hide="scale"
    >
      <FormCategoriaProductos></FormCategoriaProductos>
    </q-dialog>
    <q-dialog
      v-model="showModalForm"
      transition-show="scale"
      transition-hide="scale"
    >
      <FormEntidades></FormEntidades>
    </q-dialog>
    <q-dialog
      v-model="showModalInventario"
      transition-show="scale"
      transition-hide="scale"
    >
      <InventarioProductos></InventarioProductos>
    </q-dialog>
  </div>
</template>

<script>
import { storeToRefs, mapState } from "pinia";
import * as productosServices from "../../services/productos.services";
import * as categoriaServices from "../../services/cateroria.services";
import * as parametricasServices from "../../services/parametricas.services";
import * as clienteServices from "../../services/cliente.services";
import { defineComponent, ref, onMounted, nextTick, watch } from "vue";
import { productoStore } from "../../stores/productos-store";
const store = productoStore();
const {
  prouctos,
  showModalProductosForm,
  imageneList,
  claveCategoriasList,
  sucursalList,
  operacion,
  showModalHomolagProductoForm,
  showModalInventario,
  showFormProductos,
  nombreBusqueda,
} = storeToRefs(store);
const formProductos = ref(store.getProducto);
import { useQuasar } from "quasar";
import Productos from "src/models/Productos";
import Swal from "sweetalert2";
import { useRoute } from "vue-router";
import FormCategoriaProductos from "../CategoriaProductos/FormCategoriaProductos.vue";
import { categoriaStore } from "../../stores/categoriaProductos-store";
const catStore = categoriaStore();
const { categoria, showModalCategoriaForm, categoriaList } =
  storeToRefs(catStore);
import FormEntidades from "../Entidades/FormEntidades.vue";

import HomologarProductos from "../ProductosServicios/HomologarProductos.vue";
import InventarioProductos from "../ProductosServicios/InventarioProductos.vue";
import { clienteStore } from "../../stores/clientes-store";
const cliStore = clienteStore();
const { cliente, showModalForm } = storeToRefs(cliStore);

const productoSiatList = [];
const actividadEconomicaSiatList = [];
const actividadEconomicaSiat = {};
const stringOptions = [];
const unidadMediadaSiatList = [];

export default defineComponent({
  components: {
    FormCategoriaProductos,
    FormEntidades,
    HomologarProductos,
    InventarioProductos,
  },
  setup() {
    const router = useRoute();
    const $q = useQuasar();
    return {
      showProges: ref(false),
      usuarioForm: ref({}),
      scope: ref([]),
      formProductos: ref({}),
      categoriaList: ref(categoriaList),
      tipoProductoList: ref([]),
      actividadEconomicaSiatList: ref([]),
      productoSiatList: ref([]),
      unidadMediadaSiatList: ref([]),
      sucursalList: ref([]),
      name: null,
      $q: useQuasar(),
      listImagen: ref([]),
      files: ref(null),
      claveCategoriasSelectList: ref([]),
      sucursalSelectList: ref([]),
      myInput: ref(null),
      imagen: ref(null),
      imagenCount: ref(-1),
      actividadEconomicaSiat: ref({}),
      stringOptions: ref([]),
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
      "imageneList",
      "claveCategoriasList",
      "sucursalList",
      "operacion",
      "showModalHomolagProductoForm",
      "showModalInventario",
      "showFormProductos",
      "nombreBusqueda",
    ]),
    ...mapState(categoriaStore, [
      "categoria",
      "showModalCategoriaForm",
      "categoriaList",
    ]),
    ...mapState(clienteStore, ["cliente", "showModalForm", "clienteList"]),
  },
  created() {
    this.initPage();
    this.initForm();
  },
  mounted() {
    this.findActividadEconomica();
    this.findEntidadById();
    this.findAllCategoriasByEntidad();
    this.findAllByGrupo();
    this.initForm();
    this.findUnidadMedida();
    this.getSecuencialProducto();
  },
  methods: {
    async initPage() {
      this.usuarioForm = JSON.parse(sessionStorage.getItem("usuario"));
    },
    async operacionForm() {
      switch (operacion.value) {
        case "NUEVO":
          this.confirmSave();
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

    async confirmSave() {
      Swal.fire({
        customClass: { container: "my-swal" },
        title: "¿Está seguro de guardar el nuevo Producto o Servicio? ",
        text: "¡Si acepta realizar la operación el registro se guardará en el sistema!",
        icon: "question",
        showCancelButton: true,
        cancelButtonColor: "#dfdfdd",
        cancelButtonText: "#36454f",
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#36454f",
        confirmButtonText: "Aceptar",
      }).then((result) => {
        if (result.isConfirmed) {
          this.save();
        }
      });
    },
    async save() {
      this.showProges = true;
      let productos = {};

      productos.productosServicios = this.formProductos;
      productos.productosServicios.idEntidad = this.usuarioForm.fidEntidad;
      productos.claveCategoriasList = this.claveCategoriasSelectList;
      productos.sucursalList = sucursalList.value;
      productos.imageneList = this.listImagen;

      await productosServices
        .save(productos)
        .then((res) => {
          if (res.data.estado) {
            if (store.showFormProductos) {
              store.showFormProductos = false;
            } else {
              this.$router.push("/home/ProductosServiciosPage");
              store.findAllProducto(this.usuarioForm.fidEntidad);
            }
            store.nombreBusqueda = this.formProductos.nombreProducto;
            this.mensajePositive();
          } else {
            this.mensajeNegative();
          }
          this.showProges = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async confirmUpdate() {
      Swal.fire({
        customClass: { container: "my-swal" },
        title: "¿Está seguro de actualizar al la información del ENTIDAD?",
        text: "¡Si acepta realizar la operación el registro se guardará en el sistema!",
        icon: "question",
        showCancelButton: true,
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Aceptar",
      }).then((result) => {
        if (result.isConfirmed) {
          this.update();
          this.mensajePositive();
        }
      });
    },
    async update() {
      let productos = {};
      productos.productosServicios = this.formProductos;
      productos.claveCategoriasList = this.claveCategoriasSelectList;
      productos.sucursalList = this.sucursalSelectList;
      productos.imageneList = this.listImagen;
      await productosServices
        .update(productos)
        .then((res) => {
          store.findAllProducto(this.usuarioForm.fidEntidad);
          this.$router.push("/home/ProductosServiciosPage");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async findEntidadById() {
      await clienteServices
        .findEntidadById(this.usuarioForm.fidEntidad)
        .then((res) => {
          this.actividadEconomicaSiat = res.data.claveTipoActividadEconomica;
          this.formProductos.fidImpuestosProductosServicios =
            res.data.fidImpuestosProductoServicio;
          this.formProductos.claveImpuestosUnidadMedida =
            res.data.claveImpuestosUnidadMedida;
          this.findProductosSiat();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async findAllCategoriasByEntidad() {
      await categoriaServices
        .findAllCategoriasByEntidad(this.usuarioForm.fidEntidad)
        .then((res) => {
          if (categoriaList.value.length == 0) {
            this.categoriaList = res.data;
          } else {
            this.categoriaList = categoriaList;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async findAllByGrupo() {
      await parametricasServices
        .findAllByGrupo("TipoProducto")
        .then((res) => {
          this.tipoProductoList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    initForm() {
      switch (operacion.value) {
        case "NUEVO":
          store.clearVariables();
          this.formProductos.claveTipoProducto = 17;
          this.getSecuencialProducto();
          break;
        case "EDITAR":
          this.formProductos = prouctos.value;
          this.listImagen = imageneList.value;
          this.sucursalSelectList = sucursalList.value;
          this.claveCategoriasSelectList = claveCategoriasList.value;
          this.formProductos.disbleCodigoProducto = false;
          break;
        case "ELIMINAR":
          this.formProductos = prouctos.value;
          this.listImagen = imageneList.value;
          this.sucursalSelectList = sucursalList.value;
          this.claveCategoriasSelectList = claveCategoriasList.value;
          this.formProductos.disbleCodigoProducto = false;
          break;
      }
    },
    closeModal() {
      if (store.showFormProductos) {
        store.showFormProductos = false;
      } else {
        this.$router.push("/home/ProductosServiciosPage");
      }
    },
    onRejected: function (files) {
      this.createBase64Imagen(files[0]);

      return null;
    },
    createBase64Imagen: function (FileObject) {
      if (this.listImagen.length == 0) {
        this.listImagen = [];
        this.imagenCount = -1;
        this.imagen = "";
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        this.imagenCount = this.imagenCount + 1;
        this.base64 = event.target.result;
        let imagen = {};
        imagen.idImagenProducto = this.imagenCount;
        imagen.imagen = this.base64;
        this.listImagen[this.imagenCount] = imagen;
      };
      reader.readAsDataURL(FileObject);
    },
    onRemoved: function (id) {
      this.listImagen = this.listImagen.filter(
        (imagen) => imagen.idImagenProducto != id
      );

      if (this.listImagen.length == 0) {
        this.listImagen = [];
        this.imagen = "";
      }
    },
    onAdded: function (files) {
      this.listImagen.push(files[0]);
    },
    openModalCategoria() {
      catStore.openAndCloseModal(true);
    },
    openModalSucursal() {
      cliStore.openAndCloseModal(true);
    },
    openModalHomologacion() {
      store.opeModalHomologacion(true);
    },
    async findActividadEconomica() {
      await clienteServices
        .findActividadEconomica(this.usuarioForm.fidIdentificacionTributaria)
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
          this.usuarioForm.fidIdentificacionTributaria,
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
          this.usuarioForm.fidIdentificacionTributaria
        )
        .then((res) => {
          this.unidadMediadaSiatList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async getSecuencialProducto() {
      if (this.formProductos.claveTipoProducto != null) {
        await productosServices
          .getSecuencialProducto(
            this.usuarioForm.fidEntidad,
            this.formProductos.claveTipoProducto
          )
          .then((res) => {
            this.formProductos.codigoProducto = res.data;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    disbleCodigoProducto() {
      this.formProductos.disbleCodigoProducto =
        !this.formProductos.disbleCodigoProducto;
      if (this.formProductos.disbleCodigoProducto) {
        this.getSecuencialProducto();
      }
      this.formProductos.codigoProducto = "";
    },
    openShowModalInventario() {
      store.showModalInventario = true;
    },
    testclick() {
      this.$refs.file.pickFiles();
    },
  },
  watch: {
    imagen: function (newVal, oldVal) {
      if (newVal) {
        this.createBase64Imagen(newVal);
      } else {
        this.base64 = null;
      }
    },
  },
});
</script>
<style lang="sass" >
.my-swal
  z-index: 10001 !important
.my-card
  width: 100%
.uppercase
  text-transform: uppercase
.uppercase textarea
  text-transform: uppercase
</style>
