const addButton = document.getElementById("button-main");
        const inputField = document.getElementById("input-field");
        const girlfriendList = document.getElementById("girlfriend-list");

        addButton.addEventListener("click", function () {
            const takeValue = inputField.value.trim();

            if (takeValue !== "") {
                const inputWrapper = document.createElement("div");
                inputWrapper.className = "flex";

                const newInput = document.createElement("input");
                newInput.type = "text";
                newInput.value = takeValue;
                newInput.className = "input custom-border-red w-full max-w-xs";
                newInput.readOnly = true;

                const deleteButton = document.createElement("button");
                deleteButton.innerText = "Break Up";
                deleteButton.className = "btn bg-red-500 text-white font-bold text-sm ml-2";
                deleteButton.addEventListener("click", function () {
                    inputWrapper.remove();
                });

                inputWrapper.appendChild(newInput);
                inputWrapper.appendChild(deleteButton);

                girlfriendList.appendChild(inputWrapper);

                inputField.value = "";
            }
        });