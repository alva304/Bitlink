import clientPromise from "@/lib/mongodb"


export async function POST(request) {


    const client = await clientPromise
    const body = await request.json()
    const db = client.db("BitLink")
    const collection = db.collection("urls")

    if (!body.shorturl || !body.url) {
        return Response.json({
            success: false,
            error: true,
            message: "Missing Fields"
        })
    }


    const doc = await collection.findOne({
        shorturl: body.shorturl
    })


    if (doc) {
        return Response.json({
            success: false,
            error: true,
            message: "URL aready exists"
        })
    }


    await collection.insertOne({
        url: body.url,
        shorturl: body.shorturl
    })


    return Response.json({
        success: true,
        error: false,
        message: "URL generated"
    })
}