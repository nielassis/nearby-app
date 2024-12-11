import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
  },
  title: {
    fontSize: 14,
    fontFamily: fontFamily.medium,
    color: colors.gray[500],
    marginBottom: 12,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 10,
    backgroundColor: colors.green.soft,
    borderRadius: 8,
    gap: 10,
  },
  code: {
    fontSize: 16,
    fontFamily: fontFamily.semiBold,
    color: colors.gray[600],
    textTransform: "uppercase",
  },
});
