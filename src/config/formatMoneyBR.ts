export const formatMoneyBR = new Intl.NumberFormat(
    "pt-BR", 
    {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
    }
)