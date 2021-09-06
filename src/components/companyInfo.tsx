import React from 'react';
import {
  Box,
  chakra,
  Table,
  Thead,
  Tbody,
  Tfoot,
  TableCaption,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';

export default function companyInfo() {
  return (
    <Box>
      <chakra.h1
        textAlign={'center'}
        fontSize={'5xl'}
        py={10}
        fontWeight={'bold'}
      >
        COMPANY PROFILE
      </chakra.h1>

      <Table variant="simple" style={{ width: '963px' }}>
        <Tbody>
          <Tr>
            <Td>会社名</Td>
            <Td>
              合同会社Sour&Lemon
              <br />
              Sour & Lemon, Inc.
            </Td>
          </Tr>
          <Tr>
            <Td>所在地</Td>
            <Td>東京都台東区浅草橋5-2-3 鈴和ビル2階</Td>
          </Tr>
          <Tr>
            <Td>事業内容</Td>
            <Td>Webサービスの制作及びハードウェア、アプリの企画、開発など</Td>
          </Tr>
          <Tr>
            <Td>設立</Td>
            <Td>令和3年 2月5日</Td>
          </Tr>
          <Tr>
            <Td>代表者</Td>
            <Td>
              久松 由幸
              <br />
              西村 元希
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
}
