desc Emp;
alter table Dept add column captain int;

alter table Dept add column captain int unsigned null comment '부서장';

alter table Dept add constraint foreign key (captiain) references Emp(id) on Delete set null on Update cascade;

show create table Dept;

select * from Dept;