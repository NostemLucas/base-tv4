<template>
  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">NUEVA SUCURSAL</div>
        </q-card-section>
        <q-card-section></q-card-section>
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
      </q-card>
    </div>
  </div>
</template>

<script >
import { defineComponent, ref, onMounted } from "vue";
import { sucursalStore } from "../../stores/sucursales-store.js";
import { storeToRefs,mapState } from "pinia";
import * as categoriaServices from "../../services/sucurs";
import Swal from "sweetalert2";
const store = categoriaStore();
const { cliente, showModalForm } = storeToRefs(store);
const formCliente = ref(store.getCliente);
export default defineComponent({
  components: {},
  data() {},
  methods: {
    closeModal() {
      store.openAndCloseModal(false);
    },
  }
});
</script>
