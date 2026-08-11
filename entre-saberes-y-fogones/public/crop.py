from PIL import Image
import sys

def crop_to_square(image_path):
    try:
        img = Image.open(image_path)
        width, height = img.size
        print(f"Original size: {width}x{height}")
        
        # Determine the size of the square
        size = min(width, height)
        
        # Calculate cropping box
        left = (width - size) / 2
        top = (height - size) / 2
        right = (width + size) / 2
        bottom = (height + size) / 2
        
        # Crop the center of the image
        img_cropped = img.crop((left, top, right, bottom))
        
        # Overwrite the original file
        img_cropped.save(image_path, quality=95)
        print(f"Successfully cropped {image_path} to {size}x{size}")
    except Exception as e:
        print(f"Error processing {image_path}: {e}")

if __name__ == "__main__":
    crop_to_square("d:/Proyectos/entre-saberes-y-fogones/entre-saberes-y-fogones/public/chanfaina_cocina.jpg")
