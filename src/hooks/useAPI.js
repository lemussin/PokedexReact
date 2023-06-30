import React from "react"

function useAPI(){
    const [loadingBalls, SetLoadingBalls] = React.useState(false)
    const [balls, setBalls] = React.useState({})
    const [specialBalls, setSpecialBalls] = React.useState({})
    const [detailsBalls, SetDetailBalls] = React.useState([])
    const [berries, setBerries] = React.useState([])
    const [generations, setGenerations] = React.useState([])
    const [favorites, SetFavorites] = React.useState([])

    const getPokeBalls = () =>{
        fetch('https://pokeapi.co/api/v2/item-category/34')
        .then(res => res.json())
        .then(res => {
            setBalls(res)
            res.items.map(item => (
                fetch(item.url)
                .then(data => data.json())
                .then(data => SetDetailBalls((currentList) => [...currentList, data]))
            ))
        })
    }

    const getSpecialBalls = () =>{
        fetch('https://pokeapi.co/api/v2/item-category/33')
        .then(res => res.json())
        .then(res => {
            setSpecialBalls(res)
            res.items.map(item => (
                fetch(item.url)
                .then(data => data.json())
                .then(data => SetDetailBalls((currentList) => [...currentList, data]))
            ))
        })
    }

    const getBerries = () =>{
        setBerries([])
        fetch('https://pokeapi.co/api/v2/item-category/3/')
        .then(res => res.json())
        .then(res => {
            let berriesArr = [...berries]
            res.items.map(item => (
                fetch(item.url)
                .then(data2 => data2.json())
                .then(data2 => {berriesArr.push(data2)})
                .then(setBerries(berriesArr))
            ))
        })
    }

    const getGenerations = () =>{
        fetch('https://pokeapi.co/api/v2/generation/')
        .then(res => res.json())
        .then(res => {
            let generationsArr = []
            res.results.map(gen => (
                fetch(gen.url)
                .then(data => data.json())
                .then(data => generationsArr.push(data))
                .then(setGenerations(generationsArr))
            ))
        })
    }

    const getFavoritesLS = () =>{
        const localStorageItem = localStorage.getItem('FAVORITES_POKEMON');
        const arrParsed = JSON.parse(localStorageItem)
        SetFavorites(arrParsed)
    }

    const saveLocalStorage = (listFavorite) => {
        const stringifiedArr = JSON.stringify(listFavorite)
        localStorage.setItem('FAVORITES_POKEMON',stringifiedArr)
    }

    React.useEffect(() => {
        SetLoadingBalls(true)
        getPokeBalls()
        getSpecialBalls()
        getBerries()
        getGenerations()
        getFavoritesLS()
        setTimeout(() => {
            SetLoadingBalls(false)
        }, 1800)
    }, [])

    const addFavorite = (id) =>{
        const newList = [...favorites, id]
        SetFavorites(newList);
        saveLocalStorage(newList)
    }

    const deleteFavorite = (id) =>{
        const newFavorites = favorites.filter(pk => pk !== id);
        SetFavorites(newFavorites);
        saveLocalStorage(newFavorites)
    }


    return {loadingBalls, balls, specialBalls, detailsBalls, berries, generations, favorites, addFavorite, deleteFavorite}

}

export { useAPI }