#!/bin/bash

npm run build

scp -r dist root@106.14.141.179:/var/www/coupon/
