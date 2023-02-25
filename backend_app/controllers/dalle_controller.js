const {Configuration, OpenAIApi} = require('openai')

const configuration = new Configuration({
    apiKey: process.env.OPENAIA_API_KEY
})

const openai = new OpenAIApi(configuration)

exports.home = (req, res) => {
    res.json({
        message: "Hello from DALL-E!"
    })
}


exports.createDalle = async (req, res) => {
    try{
        const {prompt} = req.body;
        console.log('prompt: ', prompt);
        const aiResponse = await openai.createImage({
            prompt,
            n: 1,
            size: "1024x1024",
            response_format: "b64_json",
        })

        const image = aiResponse.data.data[0].b64_json

        res.json({
            photo: image
        })
    }catch(err) {
        console.log('error', err)
        res.status(500).json({
            error: err?.response.data.error.message || "Semething went wrong"
        })
    }
}