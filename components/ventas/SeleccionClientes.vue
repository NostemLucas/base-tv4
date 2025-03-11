<template>
  <div class="row q-col-gutter-md">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <q-card class="my-card">
        <q-card-section class="bg-grey-3 text-#17202a">
          <div class="text-h7">
            <b><q-icon name="person_search" size="sm" />DATOS DEL CLIENTE</b>
          </div>
        </q-card-section>
        <q-card-section>
          <div dense class="row">
            <div
              class="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 q-pa-sm"
            >
              <q-select
                dense
                transition-show="jump-up"
                transition-hide="jump-up"
                standout="text-white"
                filled
                v-model="formClienteBusqueda.idTipoDocumento"
                :options="options"
                label="TIPO DE DOCUMENTO *"
                option-label="nombre"
                option-value="id"
                emit-value
                map-options
                option-disable="inactive"
                tabindex="1"
                :max-height="10"
              >
                <template v-slot:prepend>
                  <q-icon name="content_paste_go" />
                </template>
              </q-select>
            </div>
            <div
              class="col-12 col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 q-pa-sm"
            >
              <!--q-input
                dense
                filled
                label="NIT/CI"
                class="full-width uppercase"
                v-model="formClienteBusqueda.nroDocumento"
                @keyup.enter="findByNit()"
                @blur="findByNit()"
                tabindex="2"
              >
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </!--q-input-->

              <q-select
                filled
                v-model="nroIdentificacionTributaria"
                use-input
                hide-selected
                fill-input
                option-label="nroIdentificacionTriburaria"
                option-value="idEntificacionTributaria"
                input-debounce="0"
                :options="clientesList"
                dense

                @filter="filterFnNit"
                label="SELECCIONE NIT/CI DEL CLIENTE"
                @update:model-value="selectClienteNroIdentificacionTributaria()"
                 @keyup.enter="findByNit()"

              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                     Sin Resultado
                    </q-item-section>
                  </q-item>
                </template>
                <template v-slot:option="scope">
                  <q-item v-bind="scope.itemProps">
                    <q-item-section>
                      <q-item-label style="font-size: 11px"
                        ><b>{{ scope.opt.nroIdentificacionTriburaria  }}</b></q-item-label
                      >
                      <q-item-label caption style="font-size: 10px">
                        <b>Razon Social: </b
                        >{{ scope.opt.razonSocial }} |
                        <b>Teléfono: </b>{{ scope.opt.telefono }}
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
            </div>
            <div
              class="col-12 col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 q-pa-sm"
            >
              <q-input
                dense
                filled
                label="COMPL."
                class="full-width uppercase"
                v-model="formClienteBusqueda.complementoDocumento"
                tabindex="3"
                disable
              >
              </q-input>
            </div>
            <div
              class="col-4 col-xs-4 col-sm-4 col-md-1 col-lg-1 col-xl-1 q-pa-sm"
            >
              <q-btn
                flat
                right-most-icon
                color="blue-grey-6"
                icon="person_search"
                @click="findByNit()"
                size="sm"
              >
                <q-tooltip> Buscar al Cliente </q-tooltip>
              </q-btn>
            </div>
            <div
              class="col-4 col-xs-4 col-sm-4 col-md-1 col-lg-1 col-xl-1 q-pa-sm"
            >
              <q-btn
                flat
                color="blue-grey-6"
                icon="group_add"
                @click="openModalCliente()"
                size="sm"
              >
                <q-tooltip> Registrar Nuevo Cliente </q-tooltip>
              </q-btn>
            </div>
            <div
              class="col-4 col-xs-4 col-sm-4 col-md-1 col-lg-1 col-xl-1 q-pa-sm"
            >
              <q-btn
                flat
                color="blue-grey-6"
                icon="person_remove"
                @click="limpiarDatosCliente()"
                size="sm"
              >
                <q-tooltip> Limpiar Datos </q-tooltip>
              </q-btn>
            </div>
            <!--
            <div
              class="col-12 col-xs-12 col-sm-12 col-md-1 col-lg-1 col-xl-1 q-pa-sm"
            >
              <q-btn
                flat
                round
                color="indigo-5"
                icon="production_quantity_limits"
              >
                <q-tooltip> Listar Pedidos en Reserva </q-tooltip>
              </q-btn>
            </div>
            -->
          </div>
          <div dense class="row">
            <div
              class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 q-pa-sm"
            >
              <!--q-input
                dense
                filled
                label="RAZÓN SOCIAL O NOMBRE DEL CLIENTE"
                class="full-width uppercase"
                v-model="formClienteBusqueda.razonSocial"
                tabindex="4"

              >
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </!--q-input-->

              <q-select
                filled
                v-model="model"
                use-input
                hide-selected
                fill-input
                option-label="razonSocial"
                option-value="idEntificacionTributaria"
                input-debounce="0"
                :options="clientesList"
                dense
                @filter="filterFnRazonSocial"
                label="RAZÓN SOCIAL O NOMBRE DEL CLIENTE"
                @update:model-value="selectCliente()"

              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                     Sin Resultado
                    </q-item-section>
                  </q-item>
                </template>
                <template v-slot:option="scope">
                  <q-item v-bind="scope.itemProps">
                    <q-item-section>
                      <q-item-label style="font-size: 11px"
                        ><b>{{ scope.opt.razonSocial   }}</b></q-item-label
                      >
                      <q-item-label caption style="font-size: 10px">
                        <b>Nit/CI: </b
                        >{{ scope.opt.nroIdentificacionTriburaria }} |
                        <b>Teléfono: </b>{{ scope.opt.telefono }}
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
            </div>
            <div
              class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 q-pa-sm"
            >
              <q-input
                dense
                filled
                label="CORREO ELECTRONICO  DEL CLIENTE O EMPRESA"
                class="full-width  text-lowercase"
                v-model="formClienteBusqueda.correoElectronico"
                tabindex="5"

              >
              </q-input>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>

    <q-dialog
      v-model="showModalForm"
      transition-show="scale"
      transition-hide="scale"
    >
      <FormClientes></FormClientes>
    </q-dialog>
  </div>
</template>

<script >
import FormClientes from "../../components/Clientes/FormClientes.vue";
import { defineComponent, ref } from "vue";
import Swal from "sweetalert2";
import { useQuasar, Notify } from "quasar";
import { useRoute } from "vue-router";
import { mapState, storeToRefs } from "pinia";
import * as clienteServices from "../../services/cliente.services";
import Clientes from "src/models/Clientes";
import { clienteStore } from "../../stores/clientes-store";
import { jsxDEV } from "vue/jsx-runtime";
const cliStore = clienteStore();
const { cliente, clienteList, operacion, showModalForm } =
  storeToRefs(cliStore);

const formClienteBusqueda = null;
const busquedaClienteList = [];
const optionClientes = [];

export default defineComponent({
  components: {
    FormClientes,
  },
  setup() {
    const $q = useQuasar();
    const clientesList = ref(busquedaClienteList);

    return {
      nitBusqudaCliente:ref(null),

      clientesList: ref(busquedaClienteList),
      busquedaClienteList: ref(optionClientes),
      nroIdentificacionTributaria:ref(cliente),
      model: ref(cliente),
      formClienteBusqueda: ref(cliente),
      options: [
        { id: 1093, nombre: "Doc. de Identidad" },
        { id: 1095, nombre: "Nro. de Identificación Tributaria" },
        { id: 1094, nombre: "Nro. Cedula de Identidad Extranjero" },
      ],
      mensajePositive() {
        $q.notify({
          position: "bottom-right",
          type: "positive",
          message: "El cliente se encuentra registrado en el sistemas.",
        });
      },
      mensajeNegative() {
        $q.notify({
          type: "negative",
          message: "El cliente no se encuentra registrado en el sistema.",
        });
      },
      mensajeWarnign() {
        $q.notify({
          type: "warning",
          message:
            "El cliente no se encuentra registrado en el sistema, para continuar con el proceso debe registra los datos del cliente.",
        });
      },
    };
  },
  computed: {
    ...mapState(clienteStore, ["cliente", "showModalForm", "clienteList"]),
  },
  created() {
    this.initPage();
    this.findAllClientes();
  },
  mounted() {},
  methods: {
    filterFnNit(val, update, abort) {
      if (val.length < 3) {
          abort()
          return;
      }
      update(() => {
        const needle = val.toLowerCase();
        this.nitBusqudaCliente=needle;
        this.clientesList = this.busquedaClienteList.filter(
          (v) =>(v.estado.toLowerCase().indexOf(needle) > -1 )
        );
      });
    },
    filterFnRazonSocial(val, update, abort) {
      if (val.length < 3) {
          abort()
          return;
      }
      update(() => {
        const needle = val.toLowerCase();
        this.nitBusqudaCliente=needle;
        this.clientesList = this.busquedaClienteList.filter(
          (v) =>( v.razonSocial.toLowerCase().indexOf(needle) > -1)
        );
      });
    },
    async initPage() {
      this.usuarioForm = JSON.parse(sessionStorage.getItem("usuario"));
    },

    async selectClienteNroIdentificacionTributaria() {

      this.formClienteBusqueda.id=this.nroIdentificacionTributaria.idEntificacionTributaria;
      this.formClienteBusqueda.complementoDocumento=this.nroIdentificacionTributaria.complementoDocumento;
      this.formClienteBusqueda.razonSocial=this.nroIdentificacionTributaria.razonSocial;
      this.formClienteBusqueda.correoElectronico=this.nroIdentificacionTributaria.correoElectronico;
      this.formClienteBusqueda.nit=this.nroIdentificacionTributaria.nroIdentificacionTriburaria;
      this.formClienteBusqueda.idTipoDocumento=this.nroIdentificacionTributaria.claveTipoIdetificacionTributaria;
      this.model=this.nroIdentificacionTributaria;

    },
    async selectCliente() {

      this.formClienteBusqueda.id=this.model.idEntificacionTributaria;
      this.formClienteBusqueda.complementoDocumento=this.model.complementoDocumento;
      this.formClienteBusqueda.razonSocial=this.model.razonSocial;
      this.formClienteBusqueda.correoElectronico=this.model.correoElectronico;
      this.formClienteBusqueda.nit=this.model.nroIdentificacionTriburaria;
      this.formClienteBusqueda.idTipoDocumento=this.model.claveTipoIdetificacionTributaria;
      this.nroIdentificacionTributaria=this.model;
    },
    async findByNit() {



      await clienteServices
        .findByNit(
          this.nitBusqudaCliente,
          this.formClienteBusqueda.complementoDocumento
        )
        .then((res) => {
          if (res.data.nroDocumento == "") {
            this.mensajeWarnign();
            this.openModalCliente();
          } else {
            this.mensajePositive();
            this.formClienteBusqueda = res.data;
            cliStore.addCliente(this.formClienteBusqueda);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async findAllClientes() {
      await clienteServices
        .findAllClientes(this.usuarioForm.fidEntidad)
        .then((res) => {
          this.optionClientes = res.data;
          this.busquedaClienteList = res.data;
          this.clientesList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    openModalCliente() {
      cliStore.newCliente();
      cliStore.operacionCliente("NUEVO");
      cliStore.openAndCloseModal(true);
    },
    limpiarDatosCliente() {
      this.formClienteBusqueda = new Clientes();
      this.model={};
      this.nroIdentificacionTributaria={};
      //cliente = new Clientes();
      cliStore.newCliente();
    },
  },
});
</script>
<style scoped>
:deep(.input-box .q-field__control),
:deep(.input-box .q-field__marginal) {
  height: 32px;
  font-size: 16px;
}
</style>
