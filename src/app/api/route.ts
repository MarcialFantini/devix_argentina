import connect from "@/utils/db";
import ContactModel from "@/utils/models/contactoModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connect(); // Conecta con la base de datos

    const body = await req.json();

    const nameRegex = /^[a-zA-Z\s]{2,50}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^[\d()+-]{7,15}$/;
    const textMaxLength = 500;

    const data = body as {
      name: string;
      email: string;
      phone: string;
      text: string;
    }; // Convierte el cuerpo de la solicitud en un objeto

    if (!nameRegex.test(data.name)) {
      throw new Error("El nombre no cumple con las restricciones.");
    }

    if (!emailRegex.test(data.email)) {
      throw new Error("El correo electrónico no cumple con las restricciones.");
    }

    if (!phoneRegex.test(data.phone)) {
      throw new Error("El teléfono no cumple con las restricciones.");
    }

    if (data.text.length > textMaxLength) {
      throw new Error("El texto excede el límite de longitud permitido.");
    }

    await ContactModel.create(data);

    return NextResponse.json({
      msg: ["Mensaje enviado exitosamente."],
      success: true,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json({ msg: ["Unable to send message."] });
  }
}
