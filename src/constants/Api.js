import axios from 'axios';
import Cookie from 'js-cookie';
import reactotron from 'reactotron-react-js';
const Reactotron =
  process.env.NODE_ENV !== 'production' &&
  require('reactotron-react-js').default;
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

function createAxios() {
  // console.log('process.env.PORT', process.env);
  var axiosInstant = axios.create();
  // axiosInstant.defaults.baseURL = "http://150.95.114.185:8888/";
  // axiosInstant.defaults.baseURL = "http://35.240.149.109:8585/";
  axiosInstant.defaults.baseURL =
    process.env.HOST || `http://18.141.210.230:8585/`;
  // axiosInstant.defaults.baseURL =
  //   process.env.HOST || "http://winds.hopto.org:8585/";
  // axiosInstant.defaults.baseURL = "http://localhost:8888/";
  axiosInstant.defaults.timeout = 20000;
  axiosInstant.defaults.headers = { 'Content-Type': 'application/json' };

  axiosInstant.interceptors.request.use(
    async (config) => {
      config.headers.token = Cookie.get('SESSION_ID');
      return config;
    },
    (error) => Promise.reject(error)
  );

  axiosInstant.interceptors.response.use(
    (response) => {
      // log via ReactOtron
      if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        console.log(response);
      } else {
        // production code
      }

      if (response.data.code === 403) {
        Cookie.remove('SESSION_ID');
        window.location.reload();
      }

      if (response.data.status !== 1)
        setTimeout(() => alert(response.data.msg), 300);
      return response;
    },
    (error) => {}
  );
  return axiosInstant;
}

export const getAxios = createAxios();

/* Support function */
// function handleResult(api) {
//   return api.then((res) => {
//     if (res.data?.status !== 1) {
//       // alert(res.data.msg);
//       return Promise.reject(res.data);
//     }
//     return Promise.resolve(res.data);
//   });
//   // return api
//   //   .then((res) => {
//   //     if (res.data.status !== 1) {
//   //       return Promise.reject(new Error("Co loi xay ra", res.data.msg));
//   //     }
//   //     return Promise.resolve(res.data);
//   //   })
// }

function handleResult(api) {
  return api.then((res) => {
    if (res) {
      if (res.data.status != 1) {
        if (res.data.code === 403) {
          Cookie.remove('SESSION_ID');
          // alert("Phiên đăng nhập hết hạn.");
        }
        return Promise.reject(res.data);
      }
      return Promise.resolve(res.data);
    }
  });
}

export const requestLogin = (payload) => {
  return handleResult(
    getAxios.post(`users/loginAdmin`, {
      USERNAME: payload.USERNAME,
      PASS: payload.PASS,
    })
  );
};

export const searchOrder = (payload) => {
  return handleResult(
    getAxios.get(`order/searchOrder?SEARCH=${payload}`)
  );
};

export const getOrderDetail = (id) => {
  return handleResult(
    getAxios.get(`order/getOrderDetailCustomer?ORDER_ID=${id}`)
  );
};

