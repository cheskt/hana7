set @x = 1;
select @y = 2;

select name into @z from Prof where id = 1;

select @x, @y, @z from dual;
