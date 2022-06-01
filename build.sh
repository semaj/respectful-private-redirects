mkdir -p build/img
cp -r img/*.png build/img
cp -r js build
cp manifest.json build
cd build
zip -r rps.zip ./*
cp rps.zip ..
cd ..
