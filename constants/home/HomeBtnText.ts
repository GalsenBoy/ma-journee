import { Colors } from "../Colors";

export const HomeBtnText: { type?: "default" | "withoutBackground"; content: string; textStyle: {} }[] = [
    { content: "S'inscrire", textStyle: Colors.light.text },
    {
        content: "Se connecter",
        textStyle: Colors.light.darkText,
        type: "withoutBackground"
    },
]