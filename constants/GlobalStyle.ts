import { Colors } from "./Colors";

export const GlobalStyle = {
    borderRadius: 16,
    input: {
        paddingVertical: 14,
        marginVertical: 12,
        borderWidth: 1,
        paddingLeft: 16,
        borderRadius: 16,
        borderColor: "#ccc", // Gris clair pour la bordure initiale
        backgroundColor: "#f7f7f7", // Couleur de fond gris clair pour un look moderne
        shadowColor: "#000", // Ombre subtile
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 2,
    },
    inputFocused: {
        borderColor: Colors.light.bgVive, // Couleur de bordure lorsque le champ est actif
        backgroundColor: "#fff", // Fond blanc quand actif
    },
    button: {
        marginTop: 35,
        paddingVertical: 13,
        backgroundColor: Colors.light.bgVive, // Utiliser une couleur de fond plus vive
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 3,
    },
    linkContainer: {
        marginTop: 20,
        textAlign: "center",
    },
    link: {
        fontWeight: "bold",
        color: Colors.light.bgVive,
    },
};
