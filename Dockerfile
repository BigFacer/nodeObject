FROM node

RUN  mkdir -p /home/nodeObject \
WORKDIR /home/nodeObejct
add  ./ /home/nodeObject
RUN npm install
EXPOSE 3000
CMD ["npm", "start" ]



