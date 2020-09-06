
export const getTicker = async(stock) => {
    const url = `https://finnhub.io/api/v1/company-news?symbol=${ encodeURI( stock ) }&from=2020-08-30&to=2020-09-06&token=bsm3qvvrh5rdb4arbvbg`;
    const resp = await fetch( url );
    const data  = await resp.json();

    const info = data.map(inf => {
        return {
            id : inf.id,
            title: inf.headline,
            url_img: inf?.image,
        }
    })

    return info;

}