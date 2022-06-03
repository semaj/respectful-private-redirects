mkdir build
cp -r js build
cp manifest.json build
cd build
zip -r rpr.zip ./*
cp rpr.zip ..
cd ..
