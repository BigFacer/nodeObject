import axios from 'axios';

export default {
   httpTokenRequest: (opts, data) => {
      let token = sessionStorage.getItem('access_token');
      let httpOptions =  {
          url: ':3001'+'/api' + opts.url,
          params: data,
          method: opts.method,
          header: opts.method == 'get' ? {
              'Authorization': token,
              'X-Request-Width': 'XMLHttpRequest',
              'Accept': 'application/json',
              'Content-Type': 'application/json; charsst = UTF-8'
          } : {
              'Authorization': token,
              'X-Request-Width': 'XMLHttpRequest',
              'Content-Type': 'application/x-www-from-urlencoded; charsst = UTF-8'
          },
          dataType: 'json'
      };
      // if(opts.url == '/upload'){
      //     httpOptions.header =  {
      //         'Authorization': token,
      //         'X-Request-Width': 'XMLHttpRequest',
      //         'Content-Type': false,
      //
      //     }
      // }
      let promise = new Promise( (resovle, reject) => {
          axios.request(httpOptions).then((res) => {
              resovle(res)
          }).catch((response) => {
              reject(response)
          })
      });
      return promise
  }

};