cd frontend
echo "Deleting node modules and package-lock.json"
rm -rf node_modules
rm -rf package-lock.json
echo "node_modules and package-lock.json deleted"
echo ""

echo "Installing node modules"
npm install
echo "node modules installed"
echo ""

echo "Building the frontend"
npm run build
echo "frontend built"
echo ""

echo "Building backend"
cd ../backend
mkdir -p static
rm -rf static/*
echo "Copying frontend build to backend static"
cp -r ../frontend/build/static/* static
echo "Copied frontend build to backend static"
echo ""

echo "Starting backend"
python3 app.py 
