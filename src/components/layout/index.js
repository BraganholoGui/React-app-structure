import React, { useEffect, useState } from 'react';
import * as S from './styles';
// import Header from '../header';
// import Navbar from '../navbar';
import { useHistory, useLocation } from 'react-router-dom';

function Layout({ children, ...rest }) {
  const [showNav, setShowNav] = useState(0);
  const [compact, setCompact] = useState(0);
  const toggle = () => setShowNav(Number(!showNav));
  const [url, setUrl] = useState('');
  const history = useHistory();
  const location = useLocation();

  async function loadData() {
    setUrl(history.location.pathname)
    let userLogado = await localStorage.getItem("token") || false;
    if ((userLogado === "null" || !userLogado) && history.location.pathname != '/login' ) {
      localStorage.removeItem("token")
      history.push('/login')
      return;
    }
  }
  useEffect(() => {
    loadData();
  }, [location]);

  return (
    <S.Grid {...rest}>
      {/* {
        // url != '/login' && localStorage.user != "null" ?
        history.location.pathname != '/login' ?
          <>
            <S.GridNav>
              <Navbar visible={showNav} close={toggle} setCompact={setCompact} />
            </S.GridNav>
            <S.GridHeader>
              <Header toggle={toggle} compact={compact} />
            </S.GridHeader>
          </>
          : ''
      }
      <S.GridMain>{children}</S.GridMain> */}
    </S.Grid>
  );
}

export default Layout;