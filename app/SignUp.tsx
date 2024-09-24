import { Text, TextInput, StyleSheet, View, Pressable } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "@/components/ui/ThemedText";
import { GlobalStyle } from "@/constants/GlobalStyle";
import { Link } from "expo-router";
import { useState } from "react";

type SignUpType = {
  nomComplet: string;
  pseudo: string;
  email: string;
  password: string;
};

export default function SingnUp() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpType>();
  const onSubmit = (data: SignUpType) => console.log(data);

  const [focusedField, setFocusedField] = useState<string | null>(null);

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
                style={[
                  GlobalStyle.input,
                  focusedField === "nomComplet" && GlobalStyle.inputFocused,
                ]}
                placeholder="Nom complet"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                onFocus={() => setFocusedField("nomComplet")}
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
                style={[
                  GlobalStyle.input,
                  focusedField === "pseudo" && GlobalStyle.inputFocused,
                ]}
                placeholder="Pseudo"
                onBlur={onBlur}
                onChangeText={onChange}
                onFocus={() => setFocusedField("pseudo")}
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
                style={[
                  GlobalStyle.input,
                  focusedField === "email" && GlobalStyle.inputFocused,
                ]}
                placeholder="Email"
                onBlur={onBlur}
                onFocus={() => setFocusedField("email")}
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
                style={[
                  GlobalStyle.input,
                  focusedField === "password" && GlobalStyle.inputFocused,
                ]}
                placeholder="Mot de passe"
                onBlur={onBlur}
                onFocus={() => setFocusedField("password")}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="password"
        />
      </View>
      <Pressable style={GlobalStyle.button} onPress={handleSubmit(onSubmit)}>
        <ThemedText type="link">Connexion</ThemedText>
      </Pressable>
      <ThemedText style={GlobalStyle.linkContainer}>
        Vous avez dejà un compte?{" "}
        <Link style={GlobalStyle.link} href={"/SignIn"}>
          connectez-vous
        </Link>
      </ThemedText>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },

  title: {
    textAlign: "center",
    marginVertical: 70,
  },

  image: {
    width: "100%",
    height: 200,
  },
});
