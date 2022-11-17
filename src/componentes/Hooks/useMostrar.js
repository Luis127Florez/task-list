let ultimo = 0;
let Data = [];

    function useMostrar () {
        Data = []
        for ( const  i in localStorage) {
            if (!isNaN(i)) {
                ultimo = Number(i)
                Data.push(localStorage.getItem(i))
            }
        }
        console.log(Data)

        return {ultimo , Data}
    }

export default useMostrar

