import { Text, TextInput, StyleSheet, View, Pressable } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "@/components/ui/ThemedText";
import { GlobalStyle } from "@/constants/GlobalStyle";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";

type LoginType = {
  nomComplet: string;
  pseudo: string;
  email: string;
  password: string;
};

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>();
  const onSubmit = (data: LoginType) => console.log(data);

  return (
    <SafeAreaView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Inscription
      </ThemedText>
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <ThemedText type="default">Nom complet</ThemedText>
              <TextInput
                style={styles.input}
                placeholder="Nom complet"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="nomComplet"
        />
        {errors.nomComplet && <Text>This is required.</Text>}

        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <ThemedText type="default">Pseudo</ThemedText>
              <TextInput
                style={styles.input}
                placeholder="Pseudo"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="pseudo"
        />
        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <ThemedText type="default">Email</ThemedText>
              <TextInput
                style={styles.input}
                placeholder="Email"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="email"
        />
        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <ThemedText type="default">Mot de passe</ThemedText>
              <TextInput
                style={styles.input}
                placeholder="Mot de passe"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="password"
        />
      </View>
      <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
        <ThemedText type="link">Connexion</ThemedText>
      </Pressable>
      <ThemedText style={styles.linkContainer}>
        Vous avez dejà un compte?{" "}
        <Link style={styles.link} href={"/Login"}>
          connectez-vous
        </Link>
      </ThemedText>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
  },
  input: {
    paddingVertical: 14,
    marginVertical: 12,
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: GlobalStyle.borderRadius,
  },
  button: {
    marginTop: 35,
    paddingVertical: 13,
    backgroundColor: Colors.light.text,
    borderRadius: GlobalStyle.borderRadius,
  },
  title: {
    textAlign: "center",
    marginVertical: 70,
  },
  linkContainer: {
    marginTop: 20,
    textAlign: "center",
  },
  link: {
    fontWeight: "bold",
  },
});
