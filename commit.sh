#!/bin/bash

# Verifica se foi passado um argumento para a mensagem do commit
if [ -z "$1" ]; then
  # Se não houver argumento, usa uma mensagem genérica
  MESSAGE="Commit automático"
else
  # Caso contrário, usa a mensagem passada como argumento
  MESSAGE="$1"
fi

# Executa os comandos git
git add .
git commit -m "$MESSAGE"
git push
