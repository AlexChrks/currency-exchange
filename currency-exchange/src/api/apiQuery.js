export async function apiQuery(base = 'USD') {
    //лучше не использовать дефолтный експорт с функциями


    const url = `https://api.exchangerate.host/latest?base=${base}`;
    let response = await fetch(url).catch((e) => {
      console.log('Api error')
    });
    return response.json();
    //так плохо, смешаны два подхода, лучше выбрать один, или промисы или async/await
    //1
    // return new Promise((resolve, reject) => {
    //     fetch(url)
    //         .then((response) => {
    //             resolve(response.json())
    //         })
    //         .catch(error=>reject(error))
    // })

    //2
    // try {
    //     let response = await fetch(url)
    //     return response.json();
    // } catch (e) {
    //     console.error(e)
    //     console.log('Api error')
    // }




}
