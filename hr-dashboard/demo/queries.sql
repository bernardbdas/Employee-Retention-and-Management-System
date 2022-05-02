-- Table: public.employee_table
-- DROP TABLE IF EXISTS public.employee_table;

CREATE TABLE IF NOT EXISTS public.employee_table(
emp_id character varying(5) COLLATE pg_catalog."default" NOT NULL,
emp_name character varying(20) COLLATE pg_catalog."default" NOT NULL,
dept_id character varying(5) COLLATE pg_catalog."default" NOT NULL,
CONSTRAINT employee_table_pkey PRIMARY KEY (emp_id))TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.employee_table OWNER to bernard;

-- #########################################################################

