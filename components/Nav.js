import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

//페이지 6개 + 기능 2개 +
const Nav = () => {
    return (
        <NavLayout>
            <Link href="/">
                <a>홈 버튼</a>
            </Link>
            <Link href="/msg">
                <a>메세지 버튼</a>
            </Link>
            <Link href="/notice">
                <a>공지사항</a>
            </Link>
            <Link href="/schedule">
                <a>업무일정</a>
            </Link>
            <Link as="/meeting-reserve" href="/meeting_reserve">
                <a>회의실예약</a>
            </Link>
            {/*
            기능 2개 
            <Link>
                <a href>업무시작</a>
            </Link>
            <Link>
                <a>업무종료</a>
            </Link> 
            */}
        </NavLayout>
    );
};

const NavLayout = styled.div`
    height: 100vh;
    width: 320px;
    /* min-height: 100vh; */
    /* min-width: 200px; */
    border: 1px solid blue;
`;

export default Nav;
