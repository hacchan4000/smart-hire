import Mailjet from 'node-mailjet'
import { NextResponse } from 'next/server'

//RESEND_API_KEY=re_2xLzfMcE_Eq46hGYdvG7a7RiQFdbcFaxd

export async function POST(req) {
    try {
        const form = await req.formData();

        const name = form.get('name');
        const email = form.get('email');
        const email2 = form.get('email2');
        const video = form.get('video');

        const fastApiRest = await fetch('http://localhost:8001/predict',{
            method: 'POST',
            body:form
        });

        if (!fastApiRest.ok) {
            return NextResponse.json({error: "fast api gagal"}, {status:500})
        }

        const respon_model = await fastApiRest.json();

        //kirim email ke HR pake resend

        await fetch('https://api.resend.com/emails',{
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: "SmartHire <noreply@smarthire.com>",
                to: email2,
                subject: `Your Candidate's Analysis`,
                html: `<p>Candidate Name: ${name}</p>
                       <p>Email: ${email}</p>
                       <p>Model Result:</p>
                       <pre>${JSON.stringify(respon_model, null, 2)}</pre>`
            }),
        })

        return NextResponse.json({ success: true, modelOutput })


    } catch (error) {
        console.error(error)
        return NextResponse.json({error: "server error"}, {status:500})
    }
}

