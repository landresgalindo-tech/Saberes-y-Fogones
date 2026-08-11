import sys
from rembg import remove
from PIL import Image

def process_image(input_path, output_path):
    print(f"Loading {input_path}...")
    input_img = Image.open(input_path)
    
    # Crop to a square or horizontal ratio to make it "shorter" (menos larga)
    width, height = input_img.size
    
    # If it's a tall image, crop the top and bottom to make it a square
    if height > width:
        top = (height - width) / 2
        bottom = height - top
        input_img = input_img.crop((0, top, width, bottom))
        print("Cropped to square.")
    
    print("Removing background...")
    # Remove background
    output_img = remove(input_img)
    
    print(f"Saving to {output_path}...")
    output_img.save(output_path)
    print("Done.")

if __name__ == "__main__":
    process_image('chanfaina_cocina.jpg', 'chanfaina_cocina_cutout.png')
