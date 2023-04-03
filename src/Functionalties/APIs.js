let oldRequest;
export function fetchCountry(value) {
    let newRequest = value || '';

    oldRequest = newRequest;
    return new Promise((resolve, reject) => {
        let url = '';
        value ? (url = `https://restcountries.com/v3.1/name/${value}`) : (url = `https://restcountries.com/v3.1/all`);
        fetch(url)
            .then((response) => {
                if (oldRequest === newRequest) {
                    switch (response.status) {
                        case 200:
                            resolve(response.json());
                            break;
                        default:
                            resolve([]);
                    }
                }
            })

    });
}
export function fetchCountryByCode(code) {
    let url=`https://restcountries.com/v3.1/alpha/${code}`;
   return new Promise((resolve)=>{
       fetch(url)
           .then ((response)=> {
               switch (response.status) {
                   case 200:
                       resolve(response.json());
                       break;
                   default:
                       resolve([]);
               }
           })

   });

}
