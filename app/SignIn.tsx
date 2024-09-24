import { ThemedText } from "@/components/ui/ThemedText";
import { GlobalStyle } from "@/constants/GlobalStyle";
import { Link } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

export default function SignIn() {
  type SignInType = {
    email: string;
    password: string;
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInType>();
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const onSubmit = (data: SignInType) => console.log(data);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <ThemedText type="title" style={styles.title}>
          Connexion
        </ThemedText>
        <View>
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
                    focusedField === "email" && GlobalStyle.inputFocused, // Applique le style de focus si actif
                  ]}
                  placeholder="Email"
                  onBlur={() => {
                    onBlur();
                    setFocusedField(null);
                  }}
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
                    focusedField === "password" && GlobalStyle.inputFocused, // Applique le style de focus si actif
                  ]}
                  placeholder="Mot de passe"
                  onBlur={() => {
                    onBlur();
                    setFocusedField(null);
                  }}
                  onFocus={() => setFocusedField("password")}
                  onChangeText={onChange}
                  value={value}
                />
                <ThemedText style={[GlobalStyle.link, { textAlign: "right" }]}>
                  Mot de passe oublié
                </ThemedText>
              </View>
            )}
            name="password"
          />
        </View>
        <View>
          <Pressable
            style={GlobalStyle.button}
            onPress={handleSubmit(onSubmit)}
          >
            <ThemedText type="link">Connexion</ThemedText>
          </Pressable>
          <ThemedText style={GlobalStyle.linkContainer}>
            Pas de compte?{" "}
            <Link style={GlobalStyle.link} href={"/SignUp"}>
              Inscrivez-vous
            </Link>
          </ThemedText>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: "center",
    marginBottom: 24,
  },
  formContainer: {
    marginTop: 100,
    paddingHorizontal: 24,
  },
});
