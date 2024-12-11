import { Text, View } from "react-native";
import { IconTicket } from "@tabler/icons-react-native";
import { colors } from "@/styles/theme";
import { s } from "./styles";

type Props = {
  code: string;
};

export function Coupon({ code }: Props) {
  return (
    <View style={s.container}>
      <Text style={s.title}>Utilize este cupom</Text>

      <View style={s.content}>
        <IconTicket size={16} color={colors.gray[400]} />
        <Text style={s.code}>{code}</Text>
      </View>
    </View>
  );
}
