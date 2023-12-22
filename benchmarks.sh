tests_path="cairo_programs/benchmarks"

set -e

git pull

echo //////////////////////////////////////////////////
echo ////////// Compiling cairo-vm-cli Old Felt //////////
echo //////////////////////////////////////////////////
git checkout 070aeb9dbaf55875bf1cba2cef36fccafbb4851a
cargo clean
cargo build -p cairo-vm-cli --release
mv target/release/cairo-vm-cli binaries/cairo-vm-cli-old-felt

echo //////////////////////////////////////////////////
echo ////////// Compiling cairo-vm-cli starknet-types-core //////////
echo //////////////////////////////////////////////////
git checkout 7af00641014f295d820cbc6417714d6470823440
cargo clean
cargo build -p cairo-vm-cli --release
mv target/release/cairo-vm-cli binaries/cairo-vm-cli-starknet-types-core 

for file in $(ls $tests_path | grep .cairo | sed -E 's/\.cairo//'); do
    echo "Running $file benchmark"

    export PATH="$(pyenv root)/shims:$PATH"

hyperfine -n "old-felt" "binaries/cairo-vm-cli-old-felt $tests_path/$file.json --layout starknet_with_keccak" -n "starknet-types-core" "binaries/cairo-vm-cli-starknet-types-core $tests_path/$file.json --layout starknet_with_keccak" -w 5 -r 20 > output.txt
done