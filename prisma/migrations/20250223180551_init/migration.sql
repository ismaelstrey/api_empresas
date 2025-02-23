-- CreateTable
CREATE TABLE "_referencia" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "referencia" TEXT,
    "valor" TEXT
);

-- CreateTable
CREATE TABLE "cnae" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "codigo" TEXT,
    "descricao" TEXT
);

-- CreateTable
CREATE TABLE "empresas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cnpj_basico" TEXT,
    "razao_social" TEXT,
    "natureza_juridica" TEXT,
    "qualificacao_responsavel" TEXT,
    "porte_empresa" TEXT,
    "ente_federativo_responsavel" TEXT,
    "capital_social" REAL
);

-- CreateTable
CREATE TABLE "estabelecimento" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cnpj_basico" TEXT,
    "matriz_filial" TEXT,
    "nome_fantasia" TEXT,
    "situacao_cadastral" TEXT,
    "data_situacao_cadastral" TEXT,
    "motivo_situacao_cadastral" TEXT,
    "nome_cidade_exterior" TEXT,
    "pais" TEXT,
    "data_inicio_atividades" TEXT,
    "cnae_fiscal" TEXT,
    "cnae_fiscal_secundaria" TEXT,
    "tipo_logradouro" TEXT,
    "logradouro" TEXT,
    "numero" TEXT,
    "complemento" TEXT,
    "bairro" TEXT,
    "cep" TEXT,
    "uf" TEXT,
    "municipio" TEXT,
    "ddd1" TEXT,
    "telefone1" TEXT,
    "ddd2" TEXT,
    "telefone2" TEXT,
    "ddd_fax" TEXT,
    "fax" TEXT,
    "correio_eletronico" TEXT,
    "situacao_especial" TEXT,
    "data_situacao_especial" TEXT,
    "cnpj" TEXT
);

-- CreateTable
CREATE TABLE "motivo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "codigo" TEXT,
    "descricao" TEXT
);

-- CreateTable
CREATE TABLE "municipio" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "codigo" TEXT,
    "descricao" TEXT
);

-- CreateTable
CREATE TABLE "natureza_juridica" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "codigo" TEXT,
    "descricao" TEXT
);

-- CreateTable
CREATE TABLE "pais" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "codigo" TEXT,
    "descricao" TEXT
);

-- CreateTable
CREATE TABLE "qualificacao_socio" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "codigo" TEXT,
    "descricao" TEXT
);

-- CreateTable
CREATE TABLE "simples" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cnpj_basico" TEXT,
    "opcao_simples" TEXT,
    "data_opcao_simples" TEXT,
    "data_exclusao_simples" TEXT,
    "opcao_mei" TEXT,
    "data_opcao_mei" TEXT,
    "data_exclusao_mei" TEXT
);

-- CreateTable
CREATE TABLE "socios" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cnpj" TEXT,
    "cnpj_basico" TEXT,
    "identificador_de_socio" TEXT,
    "nome_socio" TEXT,
    "cnpj_cpf_socio" TEXT,
    "qualificacao_socio" TEXT,
    "data_entrada_sociedade" TEXT,
    "pais" TEXT,
    "representante_legal" TEXT,
    "nome_representante" TEXT,
    "qualificacao_representante_legal" TEXT,
    "faixa_etaria" TEXT
);

-- CreateIndex
CREATE INDEX "idx_cnae" ON "cnae"("codigo");

-- CreateIndex
CREATE INDEX "idx_empresas_razao_social" ON "empresas"("razao_social");

-- CreateIndex
CREATE INDEX "idx_empresas_cnpj_basico" ON "empresas"("cnpj_basico");

-- CreateIndex
CREATE INDEX "idx_estabelecimento_nomefantasia" ON "estabelecimento"("nome_fantasia");

-- CreateIndex
CREATE INDEX "idx_estabelecimento_cnpj" ON "estabelecimento"("cnpj");

-- CreateIndex
CREATE INDEX "idx_estabelecimento_cnpj_basico" ON "estabelecimento"("cnpj_basico");

-- CreateIndex
CREATE INDEX "idx_motivo" ON "motivo"("codigo");

-- CreateIndex
CREATE INDEX "idx_municipio" ON "municipio"("codigo");

-- CreateIndex
CREATE INDEX "idx_natureza_juridica" ON "natureza_juridica"("codigo");

-- CreateIndex
CREATE INDEX "idx_pais" ON "pais"("codigo");

-- CreateIndex
CREATE INDEX "idx_qualificacao_socio" ON "qualificacao_socio"("codigo");

-- CreateIndex
CREATE INDEX "idx_simples_cnpj_basico" ON "simples"("cnpj_basico");

-- CreateIndex
CREATE INDEX "idx_socios_nome_socio" ON "socios"("nome_socio");

-- CreateIndex
CREATE INDEX "idx_socios_cnpj_cpf_socio" ON "socios"("cnpj_cpf_socio");

-- CreateIndex
CREATE INDEX "idx_socios_cnpj" ON "socios"("cnpj");
