<template>
  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">{{ operacion }} ENTIDAD</div>
          <!--div class="text-subtitle2">Registro de Cliente o Empresa</div-->
        </q-card-section>
        <q-form @submit="operacionForm()" @reset="onReset" class="q-gutter-md">
          <q-card-section>
            <div class="q-pa-md example-row-horizontal-alignment">
              <div dense class="row justify-center">
                <div class="col-12 col-md-12 col-sm-12 col-xs-12 q-pa-sm">
                  <q-input
                    dense
                    filled
                    v-model="formCliente.razonSocial"
                    label="NOMBRE COMPLETO/RAZÓN SOCIAL *"
                    hint="Nombre Completo del Cliente o Razon Social de la EMPRESA"
                    class="full-width"
                    :rules="[(val) => !!val || 'Este campo es requerido ']"
                  >
                    <template v-slot:prepend>
                      <q-icon name="person" />
                    </template>
                  </q-input>
                </div>
              </div>
              <div dense class="row justify-center">
                <div class="col-4 col-md-4 col-sm-4 col-xs-12 q-pa-sm">
                  <q-input
                    dense
                    filled
                    v-model="formCliente.nit"
                    label="NIT *"
                    hint="Número de identificación tributaria "
                    class="full-width"
                    type="number"
                    :rules="[(val) => !!val || 'Este campo es requerido ']"
                  >
                    <template v-slot:prepend>
                      <q-icon name="location_city" />
                    </template>
                  </q-input>
                </div>
                <div class="col-4 col-md-4 col-sm-4 col-xs-12 q-pa-sm">
                  <q-input
                    dense
                    filled
                    v-model="formCliente.telefono"
                    label="TELÉFONO"
                    class="full-width"
                    hint="Teléfono de Contacto del Cliente"
                  >
                    <template v-slot:prepend>
                      <q-icon name="settings_phone" />
                    </template>
                  </q-input>
                </div>
                <div class="col-4 col-md-4 col-sm-4 col-xs-12 q-pa-sm">
                  <q-input
                    dense
                    filled
                    v-model="formCliente.correoElectronico"
                    label="CORREO ELECTRÓNICO"
                    class="full-width"
                  >
                    <template v-slot:prepend>
                      <q-icon name="alternate_email" />
                    </template>
                  </q-input>
                </div>
              </div>
              <div dense class="row justify-center">
                <div class="col-8 col-md-8 col-sm-8 col-xs-12 q-pa-sm">
                  <q-input
                    dense
                    filled
                    v-model="formCliente.representanteLegal"
                    label="REPRESENTANTE DE ENTIDAD"
                    class="full-width"
                  >
                    <template v-slot:prepend>
                      <q-icon name="contacts" />
                    </template>
                  </q-input>
                </div>
                <div class="col-4 col-md-4 col-sm-4 col-xs-12 q-pa-sm">
                  <q-select
                    dense
                    transition-show="jump-up"
                    transition-hide="jump-up"
                    standout="text-white"
                    filled
                    v-model="formCliente.idTipoEstablecimiento"
                    :options="options"
                    label="TIPO DE ESTABLECIMIENTO"
                    option-label="nombre"
                    option-value="id"
                    emit-value
                    map-options
                    option-disable="inactive"
                    :rules="[(val) => !!val || 'Este campo es requerido ']"
                  >
                    <template v-slot:prepend>
                      <q-icon name="content_paste_go" />
                    </template>
                  </q-select>
                </div>
              </div>
              <div dense class="row justify-center">
                <div class="col-12 col-md-12 col-sm-12 col-xs-12 q-pa-sm">
                  <q-input
                    dense
                    filled
                    v-model="formCliente.direccion"
                    label="DIRECCIÓN"
                    class="full-width"
                  >
                    <template v-slot:prepend>
                      <q-icon name="location_on" />
                    </template>
                  </q-input>
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
            />
          </q-card-actions>
        </q-form>
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { clienteStore } from "../../stores/clientes-store.js";
import { storeToRefs } from "pinia";
import { mapState } from "pinia";
import * as clienteServices from "../../services/cliente.services.js";
import Swal from "sweetalert2";
const store = clienteStore();
const { cliente, showModalForm } = storeToRefs(store);
const formCliente = ref(store.getCliente);
import { useQuasar } from "quasar";

export default defineComponent({
  components: {},
  data() {
    return {
      usuarioForm: ref({}),
      formCliente: {
        id: "",
        idTipoDocumento: "",
        nroDocumento: 0,
        complemento: "",
        razonSocial: "",
        telefono: "",
        correoElectronico: "",
      },
      options: [
        { id: 14, nombre: "CASA MATRIZ" },
        { id: 15, nombre: "SUCURSAL" },
        { id: 16, nombre: "PUNTO DE VENTA" },
      ],
      name: null,
      $q: useQuasar(),
    };
  },
  computed: {
    ...mapState(clienteStore, ["cliente", "showModalForm", "operacion"]),
  },
  created() {
    this.initForm();
  },
  mounted() {},
  methods: {
    async initPage() {
      this.usuarioForm= JSON.parse(sessionStorage.getItem("usuario")) ;
    },
    async operacionForm() {
      switch (this.operacion) {
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
      store.findAllEntidades();
    },

    async confirmSave() {
      Swal.fire({
        customClass: { container: "my-swal" },
        title: "¿Está seguro de registrar al nuevo ENTIDAD?",
        text: "¡Si acepta realizar la operación el registro se guardará en el sistema!",
        icon: "question",
        showCancelButton: true,
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Aceptar",
      }).then((result) => {
        if (result.isConfirmed) {
          this.save();
        }
      });
    },
    async save() {

      this.formCliente.idTipoDocumento = 1094; //NIT SIMEMPRE PARA ENTIDADES
      this.formCliente.idTipoCliente = 13; //TIPO DE CLIENTE ENTIDAD

      await clienteServices
        .saveEntidad(this.formCliente)
        .then((res) => {
          store.openAndCloseModal(false);
          store.findAllEntidades();
          $q.notify({
            type: "positive",
            message: 'La entidad fue registrada correctamente.',
          });
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
          $q.notify({
            type: "positive",
            message: 'La entidad fue actualizada correctamente.',
          });
        }
      });
    },
    async updateEntidad() {
      await clienteServices
        .updateEntidad(this.formCliente)
        .then((res) => {
          store.openAndCloseModal(false);
          store.findAllEntidades();
        })
        .catch((err) => {
          console.log(err);
        });
    },

    initForm() {
      this.formCliente = cliente.value;
    },
    closeModal() {
      store.openAndCloseModal(false);
    },
  },
});
</script>
<style lang="sass" >
.my-swal
  z-index: 10001 !important
.my-card
  width: 100%
</style>
