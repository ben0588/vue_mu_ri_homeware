<script setup>
import * as yup from 'yup';

import useLoadingStore from '@/stores/loadingStores';
import useI18nStore from '@/stores/i18nStores';

const loadingStores = useLoadingStore();
const bsModalRef = ref(null);
const bsModalInstance = ref(null); // 實體存放區
const i18nStore = useI18nStore();

const props = defineProps({
  tempData: Object,
});

const { t } = useI18n();

const baseApiUrl = import.meta.env.VITE_APP_BASE_API_URL;
const apiPath = import.meta.env.VITE_APP_API_PATH;

// 使用 yup 設定 Vee Validate規則
const schema = yup.object().shape({
  imageUrl: yup.string().required(), // 使用 yup 自定义错误消息
});

// eslint-disable-next-line object-curly-newline
const { values, errors, meta, defineField, handleSubmit, isSubmitting } = useForm({
  validationSchema: toTypedSchema(schema),
});
const [mainPicture, mainPictureAttrs] = defineField('imageUrl');

// 處理表單送出的驗證
const onSubmit = handleSubmit(
  (values) =>
    // Simulates a 2 second delay
    new Promise((resolve) => {
      setTimeout(() => {
        console.log('Submitted', JSON.stringify(values, null, 2));
        resolve();
      }, 2000);
    }),
);
</script>
