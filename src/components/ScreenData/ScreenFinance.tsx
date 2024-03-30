import React, { useEffect, useState } from 'react';
import * as Styles from './ScreenFinance.css'
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { VscGraph } from "react-icons/vsc";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";
import useRequestProduct from '../../hooks/useRequestProduct';
import {formatMoneyBR} from '../../config/formatMoneyBR';
import ErrorMessage from '../Messages/Error/ErrorMessage';
import LoadingMessage from '../Messages/Loading/LoadingMessage';
import { Profit } from '../../config/Profit';

const ScreenFinance = () => {
  const { calculateExpectation } = new Profit();
  const {products, error, isLoading} = useRequestProduct();
  
  return (
    <Styles.MainScreenFinance>
      <h2 className='subtitle'>Métricas e informações gerais</h2>

      { !error.status ? (
        <Styles.MetricsContainer>
            { !isLoading.message ? (
              <Styles.CardMetrics>
                <h2>Total Investido</h2>
                <div className='firstContainer'>
                  <MdOutlineAttachMoney/>
                    <span>
                      {products.length > 0 && formatMoneyBR.format(calculateExpectation(products, "price"))}
                    </span>
                  
                </div>
              </Styles.CardMetrics>
              ): (
                <LoadingMessage text='Carregando Métricas'/>
              )
            }

            <Styles.CardMetrics>
              <h2>Informações do Lucro</h2>
              <div className='profitScreen'>
                <ul>

                  <li>
                    <span>
                      <FaMoneyBillTrendUp />
                      Expectatica:
                    </span>
                    <span>
                      {products.length > 0 && formatMoneyBR.format(calculateExpectation(products, "profit"))}
                    </span>
                  </li>

                  <li>
                    
                    <span>
                    <VscGraph />
                      Atual:
                    </span>
                    <span>R$:20.000</span>
                  </li>

                </ul>
              </div>
            </Styles.CardMetrics>

            <Styles.CardMetrics>
              <h2>Valor Bruto:</h2>
              <div className='greenStyle'>
                <GoGraph />
                <span>R$2000.00</span>
              </div>
            </Styles.CardMetrics>

            <Styles.CardMetrics>
              <h2>Totais de Vendas</h2>
              <div className='sellStyle'>
                <FaMoneyBillTransfer/>
                <span>5</span>
              </div>
            </Styles.CardMetrics>

        </Styles.MetricsContainer>
        ): (
          <ErrorMessage text={error.message}/>
        )
      }
      
    </Styles.MainScreenFinance>
  )
}

export default ScreenFinance
