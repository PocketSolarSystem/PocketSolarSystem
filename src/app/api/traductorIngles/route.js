import { NextResponse } from 'next/server';
import * as deepl from 'deepl-node';

export async function POST(req) {
    try {
        const { texto } = await req.json();

        const translator = new deepl.Translator(process.env.IA_KEY);
        const objetoTraduccion = await translator.translateText(texto, null, 'en-US');

        return NextResponse.json({ traduccion: objetoTraduccion.text });
    } catch (error) {
        console.error('Translation Error:', error);
        return NextResponse.json({ error: 'Failed to translate text.' }, { status: 500 });
    }
}