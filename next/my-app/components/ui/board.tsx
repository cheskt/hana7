import * as React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function Board() {
  return (
    <Select>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Select Mode' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Mode</SelectLabel>
          <SelectItem value='announcement'>공지사항</SelectItem>
          <SelectItem value='freeboard'>자유게시판</SelectItem>
          <SelectItem value='gallery'>앨범</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
