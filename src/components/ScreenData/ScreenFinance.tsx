import React, { useEffect, useState } from "react";
import * as Styles from "./ScreenFinance.css";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { VscGraph } from "react-icons/vsc";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";
import useRequestProduct from "../../hooks/useRequestProduct";
import { formatMoneyBR } from "../../config/formatMoneyBR";
import ErrorMessage from "../Messages/Error/ErrorMessage";
import LoadingMessage from "../Messages/Loading/LoadingMessage";
import { Profit } from "../../config/Profit";
import useRequestFinance from "../../hooks/useRequestFinance";
import SVGLoading from "../Messages/SVGAnimation/SVGLoading";
import { IStockAs } from "../../interfaces/Stock";
import { ISell, ItemsSell } from "../../interfaces/Finance";
interface IFinance {
  grossValue: number;
  amountSell: number;
  accProfitCurrency: number;
}
const initialeStates: IFinance = {
  grossValue: 0,
  amountSell: 0,
  accProfitCurrency: 0,
};
const ScreenFinance = () => {
  const { converToFloat, convertToNumber } = new Profit();
  const { calculateExpectation } = new Profit();
  const [showDatas, setShowDatas] = useState<IFinance>(initialeStates);
  const { products, error, isLoading } = useRequestProduct();
  const { dataFinance, isLoading: isLoadingFinance } = useRequestFinance();

  const getProfit = (): number => {
    let profit: number = 0;
    dataFinance.forEach((_data) => {
      if (Array.isArray(_data.items)) {
        _data.items.forEach((element) => {
          profit += element.profit;
        });
      }
    });
    return profit;
  };

  useEffect(() => {
    if (dataFinance.length > 0) {
      const totalBuy = dataFinance
        .map((item) => converToFloat(item.totalBuy))
        .reduce((acc, curr) => acc + curr, 0);

      setShowDatas({
        grossValue: totalBuy,
        amountSell: dataFinance.length,
        accProfitCurrency: getProfit(),
      });
    }
  }, [dataFinance]);
  return (
    <Styles.MainScreenFinance>
      <h2 className="subtitle">Métricas e informações gerais</h2>

      {!error.status ? (
        <Styles.MetricsContainer>
          {!isLoading.message ? (
            <Styles.CardMetrics>
              <h2>Total Investido</h2>
              <div className="firstContainer">
                <MdOutlineAttachMoney />
                <span>
                  {products.length > 0 &&
                    formatMoneyBR.format(
                      calculateExpectation(products, "price")
                    )}
                </span>
              </div>
            </Styles.CardMetrics>
          ) : (
            <LoadingMessage text="Carregando Métricas" />
          )}

          <Styles.CardMetrics>
            <h2>Informações do Lucro</h2>
            <div className="profitScreen">
              <ul>
                <li>
                  <span>
                    <FaMoneyBillTrendUp />
                    Expectatica:
                  </span>

                  {!isLoading.status ? (
                    <span>
                      {products.length > 0 &&
                        formatMoneyBR.format(
                          calculateExpectation(products, "profit")
                        )}
                    </span>
                  ) : (
                    <SVGLoading />
                  )}
                </li>

                <li>
                  <span>
                    <VscGraph />
                    Atual:
                  </span>
                  {
                    <span>
                      {formatMoneyBR.format(showDatas.accProfitCurrency)}
                    </span>
                  }
                </li>
              </ul>
            </div>
          </Styles.CardMetrics>

          <Styles.CardMetrics>
            <h2>Valor Bruto:</h2>
            <div className="greenStyle">
              <GoGraph />

              {!isLoadingFinance.status ? (
                <span>
                  {dataFinance.length > 0 ? (
                    formatMoneyBR.format(showDatas.grossValue)
                  ) : (
                    <span>0</span>
                  )}
                </span>
              ) : (
                <SVGLoading />
              )}
            </div>
          </Styles.CardMetrics>

          <Styles.CardMetrics>
            <h2>Totais de Vendas</h2>
            <div className="sellStyle">
              <FaMoneyBillTransfer />
              {!isLoadingFinance.status ? (
                <span>
                  <span>
                    {!error.status ? showDatas.amountSell : <SVGLoading />}
                  </span>
                </span>
              ) : (
                <span>
                  <SVGLoading />
                </span>
              )}
            </div>
          </Styles.CardMetrics>
        </Styles.MetricsContainer>
      ) : (
        <ErrorMessage text={error.message} />
      )}
    </Styles.MainScreenFinance>
  );
};

export default ScreenFinance;
