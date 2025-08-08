import { Button } from "@radix-ui/themes";
import React from "react";
import { Link, useNavigate } from "react-router-dom";


function ConfirmationModal({ setshowModel, productId }) {
  async function deleteProduct(id) {
    try {
      const response = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = response.json();

      if (response.ok) {
        console.log("Product Deleted Successfully!");
        
      }
      return data.product;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center p-4 sm:p-6 bg-black/60 overflow-y-auto">
      <div className="w-full max-w-md sm:max-w-2xl mx-auto bg-gray-900 border border-gray-500/25 p-4 rounded-lg shadow-xl">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">Confirm Product Deletion</h2>

        <div className="flex gap-2 justify-end">
          <Button onClick={() => setshowModel(false)} variant="soft" color="gray">
            Cancel
          </Button>
            <Button
              onClick={() => {
                deleteProduct(productId);
                setshowModel(false);
              }}
              variant="solid"
            >
              Confirm
            </Button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;