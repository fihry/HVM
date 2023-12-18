import {Pagination } from '@mantine/core';
import './pagination.css';
export default function pagination() {
  return (
<Pagination total={1}  boundaries={2} defaultValue={5}  />
);}