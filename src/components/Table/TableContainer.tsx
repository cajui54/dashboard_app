import * as Style from "./Table.css";
import { FaUserPen } from "react-icons/fa6";
import { BiSolidUserX } from "react-icons/bi";
import { IMessage } from "../../interfaces/Messages";
import LoadingMessage from "../Messages/Loading/LoadingMessage";
import useRequestUser from "../../hooks/useRequestUser";
import { useDispatch } from "react-redux";
import { getIdUser } from "../../redux/slices/sliceUser";

interface IPropsTable {
  [index: string]: string | boolean;
}
interface IProps {
  datas: IPropsTable[];
  isLoading: IMessage;
  deleteUser: (id: string) => void;
}

const TableContainer = ({ datas, isLoading, deleteUser }: IProps) => {
  const dispatch = useDispatch();
  const translatedUser = (_user: string): string => {
    switch (_user) {
      case "admin":
        return "Administrador";
      case "finance":
        return "Financeiro";
      case "stock":
        return "Estoquista";
      default:
        return "Atendente";
    }
  };

  const handleEditUser = (_id: string) => {
    dispatch(getIdUser({ status: true, id: _id }));
  };

  const handleDeleteUser = (_id: string, _fistName: string) => {
    if (
      window.confirm(
        `Tem certeza que deseja deletar o(a) usuário(a) ${_fistName}?`
      )
    ) {
      deleteUser(_id);
    }
  };

  return (
    <Style.MainTable>
      <h2>Usuários Cadastrados no Sistema</h2>

      <Style.Table>
        <caption>Tabelas de Usuários</caption>

        <Style.HeadTable>
          <tr>
            <th>RA</th>
            <th>Name</th>
            <th>Login</th>
            <th>Tipo</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </Style.HeadTable>
        {!isLoading.status ? (
          <tbody>
            {datas &&
              datas.map((data, index) => (
                <tr key={index}>
                  <td>{data.ra}</td>
                  <td>
                    <span>{data.firstName}</span>
                    <span>{data.lastName}</span>
                  </td>
                  <td>{data.login}</td>
                  <td>{translatedUser(data.type.toString())}</td>
                  <td>{data.type ? "Ativo" : "Bloqueado"}</td>
                  <td className="actionsButton">
                    <button
                      title="Editar Usuário"
                      onClick={() => handleEditUser(data.id.toString())}
                    >
                      <FaUserPen />
                    </button>
                    <button
                      title="Excluir Usuário"
                      onClick={() =>
                        handleDeleteUser(
                          data.id.toString(),
                          data.firstName.toString()
                        )
                      }
                    >
                      <BiSolidUserX />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        ) : (
          <LoadingMessage text="Carregando Usuário" />
        )}
      </Style.Table>
    </Style.MainTable>
  );
};

export default TableContainer;
