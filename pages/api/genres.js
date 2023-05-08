import { SERVER, API_KEY } from "@/config"

export async function getGenre() {
    const response = await fetch(`${SERVER}/genre/movie/list?api_key=${API_KEY}`)
    const jsonGenre = await response.json()

    for (let i = 0; i < jsonGenre.genres.length; i++) {
        jsonGenre.genres[i].img = `/${jsonGenre.genres[i].name.split(' ').join('-').toLowerCase()}.png`
    }
    return jsonGenre
}

export default async function handler(req, res) {
    const jsonGenre = await getGenre()
    res.status(200).json(jsonGenre)
}