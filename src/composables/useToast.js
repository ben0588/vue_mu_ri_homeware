import { toast } from 'vue3-toastify';

function useToast() {
  const toastAlert = ({message, position = 'top-left', seconds = 1000, theme = 'colored', type = 'default', transition = 'flip',}) => {
    toast(message, {
      theme, // 風格
      type, // 樣式
      position, // 位置
      autoClose: seconds, // 秒數
      transition, // 動畫
      pauseOnFocusLoss: false, // 離開畫面失焦時暫停
      dangerouslyHTMLString: true, // 能不能用 html 文字
      hideProgressBar: true, // 關閉進度條
      pauseOnHover: false, // 滑鼠懸停時暫停
    });
  };

  return { toastAlert };
}

export default useToast;
