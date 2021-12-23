Rodar o projeto 

yarn go

Criar migrate

yarn typeorm migrations:create -n nomeDaTable

rodar migrations
yarn typeorm migration:run

remover migration
yarn typeorm migration:revert

criar entidades
yarn typeorm entity:create -n nome