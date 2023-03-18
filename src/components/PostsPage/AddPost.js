import { MdKeyboardArrowDown } from "react-icons/md";
import { AiFillTags } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";
import {
  Button,
  CssVarsProvider,
  extendTheme,
  IconButton,
  Option,
  Select,
  Textarea,
} from "@mui/joy";
import { useState } from "react";

const {
  FormControl,
  Grid,
  Avatar,
  Input,
  Card,
  Typography,
  Box,
} = require("@mui/material");
import { GrAttachment } from "react-icons/gr";
import { Check } from "@mui/icons-material";

function AddPost() {
  const [isPosting, setIsPosting] = useState(false);
  const [fileInputText, setFileInputText] = useState("");
  const [tags, setTags] = useState([]);
  const [tagValue, setTagValue] = useState("");
  const handleFileInputChange = (e) => {
    setFileInputText(e.target?.files[0]?.name);
  };

  const theme = extendTheme({
    components: {
      JoySelect: {
        defaultProps: {
          indicator: <MdKeyboardArrowDown></MdKeyboardArrowDown>,
        },
      },
    },
  });

  const handleAddTag = (e) => {
    e.preventDefault();
    setTags([...tags, tagValue]);
    setTagValue("");
    e.target.reset();
  };
  const handleRemoveTag = (removeTag) => {
    console.log(removeTag);
    const currentTags = tags.filter((tag) => tag !== removeTag);
    setTags([...currentTags]);
  };

  return (
    <Card
      variant="outlined"
      sx={{ maxWidth: 800, mx: "auto", my: 2, py: 2, px: 1 }}
    >
      <Grid
        container
        spacing={1}
        alignItems="flex-start"
        justifyContent="center"
      >
        <Grid item xs={2} sm={1}>
          <Avatar
            alt="Cindy Baker"
            src="https://scontent.fcgp28-1.fna.fbcdn.net/v/t39.30808-6/315979480_866742761009362_1000142067801083796_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=5Q_9c6sYYh4AX8_EsJi&_nc_ht=scontent.fcgp28-1.fna&oh=00_AfCeKhS_LuImRN1VTZWrKEXm85NNJzCq84bRv0FQEUj0pQ&oe=641B1C63"
          />
        </Grid>
        <Grid item xs={10} sm={11}>
          {isPosting ? (
            <FormControl sx={{ width: "100%" }}>
              <Textarea
                variant="plain"
                minRows={3}
                placeholder="What's new, One?"
              />
              <Box
                sx={{
                  py: 1,
                  my: "1px",

                  borderTop: "1px solid lightBlue",
                  borderBottom: "1px solid lightBlue",
                }}
              >
                {tags.length ? (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                      gap: 3,
                      my: 1,
                    }}
                  >
                    {tags.map((tag, idx) => {
                      return (
                        <Button
                          key={idx}
                          size="sm"
                          variant="soft"
                          sx={{ position: "relative", px: 3, borderRadius: 0 }}
                        >
                          {tag}{" "}
                          <RxCrossCircled
                            onClick={() => handleRemoveTag(tag)}
                            style={{
                              position: "absolute",
                              top: "-6px",
                              right: "-6px",
                              borderRadius: "50%",
                              color: "red",
                              fontSize: "15px",
                            }}
                          ></RxCrossCircled>
                        </Button>
                      );
                    })}
                  </Box>
                ) : (
                  ""
                )}
                <form
                  onSubmit={handleAddTag}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", ml: 1 }}>
                    <AiFillTags></AiFillTags>
                    <Input
                      onChange={(e) => setTagValue(e.target.value)}
                      onFocus={() => setIsPosting(true)}
                      sx={{ borderRadius: 12, display: "block", ml: 1 }}
                      placeholder="Add a tag..."
                      disableUnderline={true}
                      //   variant="standard"
                    />
                  </Box>
                  {tagValue && (
                    <IconButton
                      type="submit"
                      variant="solid"
                      sx={{
                        height: 30,
                        width: 30,
                        borderRadius: "50%",
                      }}
                    >
                      <Check sx={{ width: 20, height: 20 }} />
                    </IconButton>
                  )}
                </form>
                <>
                  <input
                    type="file"
                    id="file-input"
                    accept="image/*"
                    onChange={handleFileInputChange}
                    style={{ display: "none" }}
                  />
                  <label
                    htmlFor="file-input"
                    style={{ display: "block", marginTop: "10px" }}
                  >
                    <Button
                      component="span"
                      variant="plain"
                      sx={{
                        "&.MuiButton-root:hover": { bgcolor: "transparent" },
                        px: 1,
                      }}
                    >
                      <GrAttachment
                        style={{
                          borderRadius: "50%",
                          border: "1px solid lightblue",
                          width: "25px",
                          height: "25px",
                          padding: "5px",
                        }}
                      ></GrAttachment>{" "}
                      <Typography
                        sx={{
                          border: "1px solid lightblue",
                          px: 1,
                          borderRadius: "20px",
                          ml: 1,
                        }}
                      >
                        {fileInputText ? "Attached" : "Attach Media"}
                      </Typography>
                    </Button>
                  </label>
                  <Typography sx={{ color: "gray", ml: 1 }}>
                    {fileInputText}
                  </Typography>
                </>
              </Box>
              <Grid
                container
                item
                justifyContent="space-between"
                alignItems="center"
                sx={{ mt: 1 }}
              >
                <Grid item>
                  <CssVarsProvider theme={theme}>
                    <Select defaultValue="Public" placeholder="Post Type">
                      <Option value="public">Public</Option>
                      <Option value="private">Private</Option>
                    </Select>
                  </CssVarsProvider>
                </Grid>
                <Grid item>
                  <Button
                    color="danger"
                    onClick={() => setIsPosting(false)}
                    size="sm"
                    variant="outlined"
                  >
                    Cancel
                  </Button>
                  <Button
                    color="primary"
                    // onClick={function () {}}
                    size="sm"
                    variant="outlined"
                    sx={{ ml: 1 }}
                  >
                    Post Update
                  </Button>
                </Grid>
              </Grid>
            </FormControl>
          ) : (
            <FormControl sx={{ width: "100%" }}>
              <Input
                onFocus={() => setIsPosting(true)}
                sx={{ borderRadius: 12, "& fieldset": { border: "none" } }}
                placeholder="What's new, One?"
                disableUnderline={true}
                variant="standard"
              />
            </FormControl>
          )}
        </Grid>
      </Grid>
    </Card>
  );
}

export default AddPost;
